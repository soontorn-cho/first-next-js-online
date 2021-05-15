import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const Button = styled.button`
    background-color: blue;
    color: white;
    border: 2px solid black;
    padding: 8px;
`

export default function Home() {
  return (
    <div className={styles.container}>
     <h1 style={{color:'red', 'border': '1px solid #000000' }}>Index Page</h1>
     <p>Lorem ipsum dolor sit amet elit. Quae, ab nesciunt. Quas laboriosam dolor necessitatibus quisquam nobis reiciendis voluptatibus tempore dicta odit.</p>
     <img src="/images/pantamitt.png" alt="" />
     <br></br>
     <Button>Submit</Button>
     <style jsx>{`
        .desc {
          padding: 20px;
          background: #eee;
          color: #999
        }
     `}</style>
     <p className="desc">Lorem ipsum dolor elit. Deleniti soluta debitis minima itaque pariatur minus, nisi magni tempore qui aut quos nihil alias optio quibusdam iste dolor fugiat? Autem, praesentium.</p>
    </div>
  )
}
