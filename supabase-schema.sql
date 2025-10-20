-- Minimal schema for Strollé (RLS ON)
create table profiles (
  id uuid primary key references auth.users on delete cascade,
  display_name text,
  city text,
  interests text[],
  avatar_url text,
  subscription_tier text check (subscription_tier in ('free','discovery','essential','premium')) default 'free',
  created_at timestamptz default now()
);
create table outings (
  id uuid primary key default gen_random_uuid(),
  requester uuid references profiles(id) on delete cascade,
  responder uuid references profiles(id) on delete cascade,
  topic text,
  venue text,
  price_eur numeric(5,2) check (price_eur >= 0 and price_eur <= 10),
  starts_at timestamptz,
  ends_at timestamptz,
  status text check (status in ('pending','accepted','declined','done','cancelled')) default 'pending',
  created_at timestamptz default now()
);
create table messages (
  id uuid primary key default gen_random_uuid(),
  outing_id uuid references outings(id) on delete cascade,
  sender uuid references profiles(id) on delete cascade,
  content text not null,
  created_at timestamptz default now()
);
alter table profiles enable row level security;
alter table outings enable row level security;
alter table messages enable row level security;
create policy "profiles are readable by all" on profiles for select using (true);
create policy "user can update own profile" on profiles for update using (auth.uid() = id);
create policy "insert own profile" on profiles for insert with check (auth.uid() = id);
create policy "user can see outings if involved" on outings for select using (auth.uid() = requester or auth.uid() = responder);
create policy "user can insert outings when requester" on outings for insert with check (auth.uid() = requester);
create policy "user can update own involved outings" on outings for update using (auth.uid() = requester or auth.uid() = responder);
create policy "messages readable if outing involved" on messages for select using (exists (select 1 from outings o where o.id = outing_id and (o.requester = auth.uid() or o.responder = auth.uid())));
create policy "messages insert if sender involved" on messages for insert with check (sender = auth.uid() and exists (select 1 from outings o where o.id = outing_id and (o.requester = auth.uid() or o.responder = auth.uid())));
