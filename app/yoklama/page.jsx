"use client"
import { useEffect, useState } from "react";
import ClassData from "../data.json";
import Link from "next/link";
import style from '@/app/page.module.css'

export default function Yoklama() {

  const [students, setStudents] = useState(ClassData.students.map(student => {
    return {
      ...student,
      isAttended: false
    }
  }))
  const [showAttendance, setShowAttendance] = useState(true);


  const handleClick = (studentId) => {
    const updatedStudents = students.map(student => {
      if (student.id === studentId) {
        return {
          ...student,
          isAttended: !student.isAttended
        }
      }
      return student;
    });

    setStudents(updatedStudents)
  }


  useEffect(() => {
    console.log(students);

  }, [students])

  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          {showAttendance ? (
            <ul className={style.student}>
              {students.map(student => (
                <li className={style.liste} key={student.id}> <p className={style.name}><strong>{student.name}</strong> {student.email}</p> <p className={style.yoklama}><Link className={style.link} href={"/yoklama/" + student.id}>detay göster</Link> <input onClick={() => handleClick(student.id)} type="checkbox" /></p></li>
              ))}
            </ul>
          ) : (
            <>
              <div className={style.studentcontainer}>
                <ul className={style.student}>
                  {students.map(student => (
                    <li className={style.liste} key={student.id}>
                      <p className={style.name}>
                        <strong>{student.name}</strong> - {student.isAttended ? "VAR" : "YOK"}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className={style.stats}>
                  <span>Katılan öğrenci sayısı: {students.filter(x => x.isAttended).length}</span><br />
                  <span>Katılmayan öğrenci sayısı: {students.filter(x => !x.isAttended).length}</span>
                </div>
              </div>
            </>


          )}
          {showAttendance && (
            <button className={style.btn} onClick={() => {
              setShowAttendance(false)
              localStorage.savedStudents = JSON.stringify(students);
            }}>Yoklamayı Tamamla</button>
          )}
        </div>
      </div>
    </>
  );
}