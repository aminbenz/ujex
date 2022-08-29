import { Items, Sidebar, Tablist, Title, UserHeader } from '../..';

const User = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar
        playlists={[
          {
            id: '1',
            name: '',
            title: "I See 'Colors' 💫",
          },
          {
            id: '2',
            name: '',
            title: 'Ye-Me 🌪',
          },
          {
            id: '3',
            name: '',
            title: 'Lalalalalalalalala 🪐',
          },
          {
            id: '4',
            name: '',
            title: 'Teardrop ☄️ ✨ 🔥',
          },
        ]}
      />
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          marginTop: 20,
        }}
      >
        <UserHeader
          style={{ marginBottom: '10px' }}
          avatar="https://i.scdn.co/image/ab6775700000ee85a9b0466186cebc2bd8a83827"
          display_name="Amin Benz"
          type="user"
        />
        <Tablist
          text="#818181"
          list={[
            {
              href: '/overview',
              target: '_blank',
              title: 'overview',
            },
            {
              href: '/recent listening',
              target: '_self',
              title: 'recent listening',
            },
            {
              href: '/playlists',
              title: 'playlists',
            },
            {
              href: '/followers',
              target: '_self',
              title: 'followers',
            },
            {
              href: '/followings',
              target: '_self',
              title: 'followings',
            },
          ]}
        />
        <section className="s1">
          <Title fontSize={18} fontWeight={400} text="#b9b8bd">
            Recently played
          </Title>
          <Items
            list={[
              {
                description: 'Slow down with some calming keys.',
                id: '1',
                image:
                  'https://i.scdn.co/image/ab67706f00000003ec69f78942a99131ab104df5',
                title: 'Calm Vibes',
              },
              {
                description: 'Gentle ambient piano to help you fall asleep.',
                id: '2',
                image:
                  'https://i.scdn.co/image/ab67706f00000003b70e0223f544b1faa2e95ed0',
                title: 'Sleep',
              },
              {
                description:
                  'Listen to easy songs from your favorite artists! Cover: Lady Gaga',
                id: '3',
                image:
                  'https://i.scdn.co/image/ab67706f00000003c4e0a29097d2f0f52baf8b68',
                title: 'Soft Pop Hits',
              },
              {
                description: 'Steady rain without any thunder.',
                id: '4',
                image:
                  'https://i.scdn.co/image/ab67706f00000003aba1f07094bd3e98cd0122de',
                title: 'Rain Sounds',
              },
              {
                description: 'Pouring rain and occasional rolling thunder.',
                id: '5',
                image:
                  'https://i.scdn.co/image/ab67706f0000000393fe06c436d719d3f31107d0',
                title: 'Night Rain',
              },
              {
                description:
                  'The perfect backdrop to an evening spent relaxing in solitude.',
                id: '6',
                image:
                  'https://i.scdn.co/image/ab67706f00000003987367cd09caff68b5fa34ec',
                title: 'Late Night Jazz',
              },
              {
                description:
                  'Relax and fall asleep to ASMR trigger sounds (no talking).',
                id: '7',
                image:
                  'https://i.scdn.co/image/ab67706f0000000328bb958d28682eacbdf45389',
                title: 'ASMR Sleep',
              },
            ]}
          />
        </section>
        <section className="s2">
          <Title fontSize={18} fontWeight={400} text="#b9b8bd">
            Playlists
          </Title>
          <Items
            list={[
              {
                description: 'Slow down with some calming keys.',
                id: '1',
                image:
                  'https://i.scdn.co/image/ab67706f00000003ec69f78942a99131ab104df5',
                title: 'Calm Vibes',
              },
              {
                description: 'Gentle ambient piano to help you fall asleep.',
                id: '2',
                image:
                  'https://i.scdn.co/image/ab67706f00000003b70e0223f544b1faa2e95ed0',
                title: 'Sleep',
              },
              {
                description:
                  'Listen to easy songs from your favorite artists! Cover: Lady Gaga',
                id: '3',
                image:
                  'https://i.scdn.co/image/ab67706f00000003c4e0a29097d2f0f52baf8b68',
                title: 'Soft Pop Hits',
              },
              {
                description: 'Steady rain without any thunder.',
                id: '4',
                image:
                  'https://i.scdn.co/image/ab67706f00000003aba1f07094bd3e98cd0122de',
                title: 'Rain Sounds',
              },
              {
                description: 'Pouring rain and occasional rolling thunder.',
                id: '5',
                image:
                  'https://i.scdn.co/image/ab67706f0000000393fe06c436d719d3f31107d0',
                title: 'Night Rain',
              },
              {
                description:
                  'The perfect backdrop to an evening spent relaxing in solitude.',
                id: '6',
                image:
                  'https://i.scdn.co/image/ab67706f00000003987367cd09caff68b5fa34ec',
                title: 'Late Night Jazz',
              },
              {
                description:
                  'Relax and fall asleep to ASMR trigger sounds (no talking).',
                id: '7',
                image:
                  'https://i.scdn.co/image/ab67706f0000000328bb958d28682eacbdf45389',
                title: 'ASMR Sleep',
              },
            ]}
          />
        </section>
      </div>
    </div>
  );
};

export default User;
