import { useNavigate } from "react-router-dom";

export default function CV() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        padding: 30,
        fontFamily: "monospace",
        background: "#000",
        color: "#00ff88",
        minHeight: "100vh",
        lineHeight: 1.6,
      }}
    >
      {/* HEADER */}
      <h1>👤 Jules VENTURA</h1>
      <h2>🧠 Analyste SOC - Alternance 2 ans</h2>

      <p style={{ color: "#888" }}>
        Rythme : 1 jour/semaine + 1 semaine tous les 2 mois
      </p>

      <hr style={{ margin: "20px 0", borderColor: "#222" }} />

      {/* CONTACT */}
      <section>
        <h3>📡 Contact</h3>
        <p>📧 julesventura99@gmail.com</p>
        <p>📍 48 rue Anatole France Batiment B Appartement 7 24100 Bergerac </p>
        <p>📞 06.12.15.60.42</p>
        <p>💻 
          <a href="https://github.com/Juleslgc" target="_blank"
        style={{ color: "#00ff88" }}>https://github.com/Juleslgc</a>
          
        </p>
        <p>🔗 
          <a href="www.linkedin.com/in/jules-ventura" target="_blank"
        style={{ color: "#00ff88" }}>www.linkedin.com/in/jules-ventura</a>
        </p>
      </section>

      <hr style={{ margin: "20px 0", borderColor: "#222" }} />

      {/* PROFILE */}
      <section>
        <h3>🧠 Profil</h3>

        <p>
          Passionné par la cybersécurité, je me forme actuellement sur
          <b> Let's Defend </b> afin de devenir Analyste SOC.
        </p>

        <p>
          Diplômé en développement web, je recherche une alternance Bac+4 en
          cybersécurité afin de mobiliser mes compétences techniques et mon
          sens de l’analyse pour la détection de menaces.
        </p>

        <p>
          Objectif : devenir analyste SOC capable d’identifier, analyser et
          répondre aux incidents de sécurité en environnement réel.
        </p>
      </section>

      <hr style={{ margin: "20px 0", borderColor: "#222" }} />

      {/* COMPETENCES TECH (AVEC LOGOS) */}
      <section>
        <h3>🧠 Compétences techniques</h3>

        {/* LANGAGES */}
        <h4>💻 Langages</h4>
        <div style={{ display: "flex", gap: 15, flexWrap: "wrap" }}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width="40" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" width="40" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" width="40" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" width="40" />
        </div>

        {/* OUTILS DEV */}
        <h4 style={{ marginTop: 20 }}>🛠️ Outils Dev</h4>
        <div style={{ display: "flex", gap: 15, flexWrap: "wrap" }}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="40" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="40" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width="40" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" width="40" />
        </div>

        {/* SYSTEMES */}
        <h4 style={{ marginTop: 20 }}>🖥️ Systèmes & Environnements</h4>

        <div style={{ display: "flex", gap: 15, flexWrap: "wrap", alignItems: "center" }}>
          
          <div style={{ textAlign: "center" }}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
              width="40"
            />
            <p style={{ fontSize: 12 }}>Linux</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg"
              width="40"
            />
            <p style={{ fontSize: 12 }}>Ubuntu</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"
              width="40"
            />
            <p style={{ fontSize: 12 }}>Windows / WSL</p>
          </div>

        </div>

        {/* CYBER */}
        <h4 style={{ marginTop: 20 }}>🛡️ Cyber & Réseau</h4>
        <ul>
          <li>SIEM (notions - Let's Defend)</li>
          <li>Analyse de logs</li>
          <li>Wireshark (notions)</li>
          <li>Nmap (notions)</li>
          <li>TCP/IP, HTTP/HTTPS</li>
        </ul>
      </section>

      <hr style={{ margin: "20px 0", borderColor: "#222" }} />

      {/* PROJETS */}
<section>
  <h3>💻 Projets</h3>

  {/* PROJECT 1 */}
  <div
    style={{
      marginBottom: 15,
      padding: 10,
      border: "1px solid #222",
      background: "#0a0a0a",
    }}
  >
    <h4>🔐 Secure Password Generator</h4>

    <p>
      Application web de génération de mots de passe sécurisés.
    </p>

    <p>
      🔗 Lien :{" "}
      <a
        href="https://secure-password-generator1.netlify.app/"
        target="_blank"
        style={{ color: "#00ff88" }}
      >
        https://secure-password-generator1.netlify.app/
      </a>
    </p>

    <p>
      🧠 Description : projet développé avec React et Python (Flask),
      permettant la génération de mots de passe sécurisés via une API REST.
    </p>

    <p>
      ⚙️ Backend Flask utilisé pour exposer une API simple avec validation des
      entrées et logique de génération sécurisée.
    </p>

    <p>
      🚀 Déploiement : frontend sur Netlify, backend initialement sur Heroku
      (désactivé suite à la fin des offres gratuites). Une migration vers un serveur
personnel (Raspberry Pi) est en cours.
    </p>
  </div>

  {/* PROJECT 2 */}
  <div
    style={{
      marginBottom: 15,
      padding: 10,
      border: "1px solid #222",
      background: "#0a0a0a",
    }}
  >
    <h4>📡 Analyseur de Logs</h4>

    <p>
      🔗 Lien :{" "}
      <a
        href="https://github.com/Juleslgc/Personal-Project/tree/main/Log_Analyzer"
        target="_blank"
        style={{ color: "#00ff88" }}
      >
        GitHub - Log Analyzer
      </a>
    </p>

    <p>
      🧠 Description : outil de parsing et d’analyse de fichiers de logs
      permettant d’identifier des anomalies et tendances.
    </p>

    <p>
      ⚙️ Backend développé en Python avec FastAPI pour le traitement des logs
      en temps réel.
    </p>

    <p>
      💻 Frontend en React pour la visualisation des données et SQLite pour la
      gestion locale des informations.
    </p>

    <p>
      🎯 Objectif : détecter des comportements anormaux et structurer une
      analyse de logs type SOC.
    </p>
  </div>
</section>

      <hr style={{ margin: "20px 0", borderColor: "#222" }} />

      {/* INTERETS */}
      <section>
        <h3>🏄 Centres d’intérêt</h3>

        <p>Basketball • Surf • Musculation • Course à pied • Biodiversité marine</p>
      </section>

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: 30,
          padding: 12,
          background: "#111",
          color: "lime",
          border: "1px solid lime",
          cursor: "pointer",
        }}
      >
        ⬅ Back to Dashboard
      </button>
    </div>
  );
}