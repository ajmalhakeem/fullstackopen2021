import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'


const Course = (courses) => {    
    return (
        <div>
            <Header head={courses.courses}></Header>
            <Content content={courses.courses}></Content>
            <Total total={courses.courses}></Total>
        </div>
    )
}

export default Course