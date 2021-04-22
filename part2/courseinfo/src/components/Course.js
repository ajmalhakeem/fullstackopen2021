import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'


const Course = ({courses}) => {    
    return (
        <div>
            <Header course={courses}></Header>
            <Content course={courses}></Content>
            <Total total={courses}></Total>
        </div>
    )
}

export default Course