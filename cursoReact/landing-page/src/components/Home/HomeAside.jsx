import Button from '../Button'
import "./Home.scss"

const HomeAside = () => {
  return (
    <div className='aside-container'>
      <h1>Clear value for your <span>target</span> Customer</h1>

      <p>A supporting statement for your value proposition to encourage customers to complete your CTA .
        A supporting statement for your value proposition to encourage customers to complete your CTA .
      </p>

      <Button className={'btn-aside'} text={'get-offer'} />


    </div>
  )
}

export default HomeAside