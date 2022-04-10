// import type { NextPage } from 'next'
import Main  from '../components/Main'
import Header from '../components/Header'
import TransactionHistory from '../components/TransactionHistory'

const Home = () => {
  const style = {
    wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between`,
  }
  return (
    <div className={style.wrapper}>
      <Header />
      <Main/>
      <TransactionHistory/>
    </div>
  )
}

export default Home
