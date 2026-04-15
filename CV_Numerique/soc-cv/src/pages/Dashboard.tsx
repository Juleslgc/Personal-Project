import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Log = {
  time: string;
  level: "INFO" | "WARN" | "ALERT";
  message: string;
  ip: string;
  user?: string;
};

export default function Dashboard() {
  const navigate = useNavigate();

  const [logs, setLogs] = useState<Log[]>([
    {
      time: new Date().toLocaleTimeString(),
      level: "INFO",
      message: "SOC system initialized",
      ip: "127.0.0.1",
      user: "system",
    },
  ]);

  const [alert, setAlert] = useState(false);

  // LIVE LOG SYSTEM (stable)
  useEffect(() => {
    const pool: Log[] = [
      {
        time: new Date().toLocaleTimeString(),
        level: "INFO",
        message: "User login success",
        ip: "192.168.1.10",
        user: "john.doe",
      },
      {
        time: new Date().toLocaleTimeString(),
        level: "WARN",
        message: "Failed login attempt",
        ip: "185.23.54.12",
        user: "admin",
      },
      {
        time: new Date().toLocaleTimeString(),
        level: "WARN",
        message: "Repeated authentication failures",
        ip: "185.23.54.12",
        user: "admin",
      },
      {
        time: new Date().toLocaleTimeString(),
        level: "ALERT",
        message: "Suspicious brute force pattern detected",
        ip: "185.23.54.12",
        user: "admin",
      },
    ];

    const interval = setInterval(() => {
      const newLog = pool[Math.floor(Math.random() * pool.length)];

      setLogs((prev) => {
        const updated = [newLog, ...prev];

        // limite anti crash
        if (updated.length > 15) updated.pop();

        return updated;
      });

      // trigger alert SOC
      if (!alert && Math.random() > 0.85) {
        setAlert(true);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, [alert]);

  return (
    <div
      style={{
        padding: 20,
        background: "#000",
        color: "#00ff88",
        fontFamily: "monospace",
        minHeight: "100vh",
      }}
    >
      {/* HEADER */}
      <h1>🖥 SOC Dashboard</h1>

      {/* ALERT */}
      {alert && (
        <div
          style={{
            marginTop: 10,
            padding: 10,
            background: "darkred",
            color: "white",
            border: "1px solid red",
          }}
        >
          ⚠️ ALERT: Possible Brute Force Attack detected on user "admin"
          <br />
          IP suspecte: 185.23.54.12
        </div>
      )}

      {/* BUTTON INVESTIGATION */}
      <button
        onClick={() => navigate("/investigation")}
        style={{
          marginTop: 15,
          padding: 10,
          background: "#111",
          color: "lime",
          border: "1px solid lime",
          cursor: "pointer",
        }}
      >
        🔍 Start Investigation
      </button>

      {/* LOGS */}
      <div
        style={{
          marginTop: 20,
          background: "#0a0a0a",
          padding: 10,
          height: 350,
          overflowY: "auto",
          border: "1px solid #222",
        }}
      >
        <h3>📡 Live Logs</h3>

        {logs.map((log, i) => (
          <div key={i} style={{ padding: "4px 0", borderBottom: "1px solid #222" }}>
            <span style={{ color: "#888" }}>[{log.time}]</span>{" "}

            <span
              style={{
                color:
                  log.level === "WARN"
                    ? "orange"
                    : log.level === "ALERT"
                    ? "red"
                    : "#00ff88",
              }}
            >
              {log.level}
            </span>{" "}

            <span>{log.message}</span>{" "}

            <span style={{ color: "#00bfff" }}>IP: {log.ip}</span>{" "}

            {log.user && (
              <span style={{ color: "#aaa" }}> user: {log.user}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}