# 🧠 SOC Simulation Dashboard – Brute Force Investigation

## 🔥 Overview

This project is a **SOC (Security Operations Center) simulation dashboard** designed to reproduce a realistic cybersecurity incident investigation workflow.

The application simulates a **brute force attack detection scenario**, allowing users to analyze logs, identify suspicious activity, and conclude an incident investigation.

It is built as a **front-end SOC training / portfolio project** to demonstrate cybersecurity and log analysis skills.

---

## 🎯 Objective

The main goal of this project is to simulate how a SOC analyst:

- Detects suspicious login attempts
- Analyzes raw logs
- Identifies brute force patterns
- Confirms security incidents
- Generates a final incident report

---

## 🧪 Simulated Scenario

### 🔴 Attack Type
Brute Force Attack (MITRE ATT&CK: T1110)

### 📡 Behavior
- Multiple failed login attempts
- Repeated access from the same IP
- Final successful login after failures

### 🧠 Analyst Task
- Filter logs
- Identify suspicious IP
- Detect attack pattern
- Validate incident

---

## 🖥️ Features

- 📊 SOC-style dashboard interface
- 📡 Real-time style log stream (simulated)
- 🔎 Log filtering (IP / user)
- 🧠 Automatic brute force detection logic
- 📄 Incident report generation (CV page)
- 🧭 Multi-page navigation (Dashboard / Investigation / CV)

---

## 🛠️ Tech Stack

- React (Vite)
- TypeScript
- React Router DOM
- Inline CSS (SOC-style UI)
- Mock data simulation (no backend required)

---

## 📁 Project Structure
src/    
├── pages/     
│ ├── Dashboard.tsx    
│ ├── Investigation.tsx    
│ ├── CV.tsx    
│    
├── components/    
│ ├── Sidebar.tsx    
│    
├── App.tsx    
└── main.tsx    

---

## 🚀 How to run locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🧠 Key Learning Outcomes

This project demonstrates:

- SOC workflow understanding
- Log analysis fundamentals
- Security incident investigation process
- Frontend simulation of cybersecurity tools
- Basic detection logic implementation

---

## 🎓 Author

Jules Ventura

Aspiring SOC Analyst   
Seeking a work-study placement in Cybersecurity (Bac+4)   
Web Development Background