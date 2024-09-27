"use client";
import ClassData from "/app/data.json";
import style from '@/app/page.module.css'

export default function Students({ params }) {
  const { id } = params;  
  const student = ClassData.students[id];

  return (
    <div className={style.studentcontainer}>
      <h1 className={style.studenttitle}>{student.name} - Bilgileri</h1>
      <div className={style.studentinfo}>
        <p><strong>Yaş:</strong> {student.age}</p>
        <p><strong>Bilgisayar:</strong> {student.pc}</p>
        <p><strong>Eğitim:</strong> {student.education}</p>
        <p><strong>Konum:</strong> {student.location}</p>
        <p><strong>Öğretmen:</strong> {student.teacher}</p>
        <p><strong>Telefon:</strong> {student.phone}</p>
        <p><strong>Adres:</strong> {student.address}</p>
        <p><strong>Doğum Tarihi:</strong> {student.birth_date}</p>
        <p><strong>LinkedIn:</strong> <a href={`https://${student.linkedin}`} target="_blank" rel="noopener noreferrer">{student.linkedin}</a></p>
        <p><strong>GitHub:</strong> <a href={`https://${student.github}`} target="_blank" rel="noopener noreferrer">{student.github}</a></p>
        <p><strong>Hedefler:</strong> {student.goals}</p>
        <p><strong>Not Ortalaması:</strong> {student.gpa}</p>
      </div>
    </div>
  );
}
