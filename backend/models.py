from sqlalchemy import Column, UUID, DateTime, Text, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import func

Base = declarative_base()


class Answers(Base):
    __tablename__ = "answers"
    id = Column(UUID, primary_key=True, index=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    response = Column(Text, nullable=False)
    does_consent = Column(Boolean, nullable=False, default=False)
