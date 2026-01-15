from database.db import db
from datetime import datetime
from enum import Enum

class LogLevel(Enum):
  DEBUG = "DEBUG"
  INFO = "INFO"
  WARNING = "WARNING"
  ERROR = "ERROR"
  CRITICAL = "CRITICAL"


class Log(db.Model):
  __tablename__ = 'logs'

  id = db.Column(db.Integer, primary_key=True)
  timestamp = db.Column(db.DateTime, index=True, nullable=False)
  level = db.Column(db.Enum(LogLevel, name='log_level_enum'), index=True, nullable=False)
  service = db.Column(db.String(50), index=True)
  message = db.Column(db.Text)
  raw_line = db.Column(db.Text)
  user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)
  event_user = db.Column(db.String(120))
  session_id = db.Column(db.String(64), index=True)
  ip_address = db.Column(db.String(45))
  hostname = db.Column(db.String(255))
  created_at = db.Column(db.DateTime, default=datetime.utcnow)

  #Relation
  user = db.relationship('User', backref='logs', lazy=True)

  def to_dict(self):
    return{
      'id' : self.id,
      'timestamp': self.timestamp,
      'level': self.level,
      'service': self.service,
      'message': self.message,
      'raw_line': self.raw_line,
      'user_id': self.user_id,
      'event_user': self.event_user,
      'session_id': self.session_id,
      'ip_address': self.ip_address,
      'hostname': self.hostname,
      'created_at': self.created_at.isoformat()

    }