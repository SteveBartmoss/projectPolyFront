import {
  CalendarDays,
  Link as LinkIcon,
  MapPin,
  MessageCircle,
  MoreHorizontal,
  UserPlus,
} from "lucide-react";

import "./Profile.css";

const user = {
  name: "Marco Rivas",
  username: "@marco.rivas",
  avatar:
    "https://i.pravatar.cc/300?img=12",
  cover:
    "https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=1600&auto=format&fit=crop",
  bio: "Full stack developer • Tech enthusiast • Coffee & Code",
  location: "México",
  website: "stevebartmoss.netlify.app",
  joined: "Se unió en 2022",
  following: 245,
  followers: "1.8k",
  verified: true,
};

const posts = [
  {
    id: 1,
    content:
      "Terminando la integración del nuevo servicio de pagos. TypeScript + Fastify + Prisma = productividad. 🚀",
    time: "2h",
    comments: 12,
    reposts: 8,
    likes: 156,
  },
  {
    id: 2,
    content:
      "La mejor forma de aprender es construyendo. Hoy terminé un pequeño proyecto con Tauri y React para un cliente. Próximo objetivo: mejorar la arquitectura y agregar tests.",
    time: "1d",
    comments: 8,
    reposts: 4,
    likes: 102,
  },
  {
    id: 3,
    content:
      "Siempre es buen momento para volver a los clásicos. Revisando el Dragon Book y recordando por qué me encanta la parte de parsers y AST. 📚",
    time: "3d",
    comments: 6,
    reposts: 3,
    likes: 78,
  },
];

function Profile() {
  return (
    <div className="profile-page">

      {/* PROFILE HEADER */}
      <section className="profile-card">

        <div
          className="profile-cover"
          style={{
            backgroundImage: `url(${user.cover})`,
          }}
        >
          <button className="icon-button cover-menu">
            <MoreHorizontal size={20} />
          </button>
        </div>

        <div className="profile-main">

          <div className="profile-avatar-wrapper">
            <img
              className="profile-avatar"
              src={user.avatar}
              alt={user.name}
            />

            <span className="online-indicator" />
          </div>

          <div className="profile-actions">
            <button className="secondary-button">
              <MessageCircle size={17} />
              Mensaje
            </button>

            <button className="primary-button">
              <UserPlus size={17} />
              Seguir
            </button>

            <button className="icon-button">
              <MoreHorizontal size={20} />
            </button>
          </div>

          <div className="profile-information">

            <div className="profile-name-row">
              <h1>{user.name}</h1>

              {user.verified && (
                <span className="verified">
                  ✓
                </span>
              )}
            </div>

            <span className="username">
              {user.username}
            </span>

            <p className="profile-bio">
              {user.bio}
            </p>

            <div className="profile-meta">

              <span>
                <MapPin size={16} />
                {user.location}
              </span>

              <span>
                <LinkIcon size={16} />
                <a href={`https://${user.website}`}>
                  {user.website}
                </a>
              </span>

              <span>
                <CalendarDays size={16} />
                {user.joined}
              </span>

            </div>

            <div className="profile-stats">

              <span>
                <strong>{user.following}</strong>
                Siguiendo
              </span>

              <span>
                <strong>{user.followers}</strong>
                Seguidores
              </span>

            </div>

          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="profile-content">

        <main className="profile-feed">

          <ProfileTabs />

          {posts.map((post) => (
            <ProfilePost
              key={post.id}
              post={post}
              user={user}
            />
          ))}

        </main>

        <ProfileSidebar />

      </div>
    </div>
  );
}


/* -------------------------------- */
/* TABS */
/* -------------------------------- */

function ProfileTabs() {
  const tabs = [
    "Publicaciones",
    "Respuestas",
    "Destacados",
    "Reels",
    "Galería",
    "Me gusta",
  ];

  return (
    <nav className="profile-tabs">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={index === 0 ? "active" : ""}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}


/* -------------------------------- */
/* POST */
/* -------------------------------- */

function ProfilePost({ post, user }) {
  return (
    <article className="profile-post">

      <img
        className="post-avatar"
        src={user.avatar}
        alt={user.name}
      />

      <div className="post-content">

        <div className="post-header">

          <div>
            <strong>{user.name}</strong>

            {user.verified && (
              <span className="verified small">
                ✓
              </span>
            )}

            <span className="post-username">
              {user.username} · {post.time}
            </span>
          </div>

          <button className="post-menu">
            <MoreHorizontal size={18} />
          </button>

        </div>

        <p>
          {post.content}
        </p>

        <div className="post-actions">

          <button>
            <MessageCircle size={17} />
            {post.comments}
          </button>

          <button>
            ↻
            {post.reposts}
          </button>

          <button>
            ♡
            {post.likes}
          </button>

          <button>
            ↗
          </button>

        </div>

      </div>
    </article>
  );
}


/* -------------------------------- */
/* SIDEBAR */
/* -------------------------------- */

function ProfileSidebar() {
  return (
    <aside className="profile-sidebar">

      <section className="sidebar-card">

        <div className="sidebar-title">
          <h3>Sobre mí</h3>

          <button className="post-menu">
            ✎
          </button>
        </div>

        <p>
          Desarrollador de software con pasión por la
          tecnología, el diseño y la resolución de problemas.
          Me gusta explorar nuevas herramientas, aprender
          cosas interesantes y crear proyectos que realmente
          aporten valor.
        </p>

        <div className="skills">

          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Vue",
            "Node.js",
            "Linux",
            "Tauri",
            "Docker",
            "PostgreSQL",
          ].map((skill) => (
            <span key={skill}>
              {skill}
            </span>
          ))}

        </div>
      </section>


      <section className="sidebar-card">

        <h3>En línea ahora</h3>

        <div className="online-users">

          {[1, 2, 3, 4, 5].map((user) => (
            <img
              key={user}
              src={`https://i.pravatar.cc/100?img=${user + 20}`}
              alt="Usuario"
            />
          ))}

          <span className="more-users">
            +12
          </span>

        </div>

        <small>
          12 amigos también están en línea
        </small>

      </section>


      <section className="sidebar-card">

        <h3>Estadísticas</h3>

        <div className="statistics">

          <div>
            <span>✉</span>
            <label>Publicaciones</label>
            <strong>142</strong>
          </div>

          <div>
            <span>♧</span>
            <label>Seguidores</label>
            <strong>1.8k</strong>
          </div>

          <div>
            <span>♙</span>
            <label>Siguiendo</label>
            <strong>245</strong>
          </div>

          <div>
            <span>♡</span>
            <label>Me gusta</label>
            <strong>4.3k</strong>
          </div>

        </div>

      </section>


      <section className="sidebar-card">

        <h3>Intereses</h3>

        <div className="skills">

          {[
            "Tecnología",
            "Videojuegos",
            "Cine",
            "Música",
            "Fotografía",
            "Viajes",
          ].map((interest) => (
            <span key={interest}>
              {interest}
            </span>
          ))}

        </div>

      </section>

    </aside>
  );
}

export default Profile;