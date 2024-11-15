import Slider from 'react-infinite-logo-slider'


const Component = () => {
    
    return (
        <Slider
            width="250px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={'#fff'}
        >
            <Slider.Slide>
                <img src="/slider/any.png" alt="any" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/slider/any2.png" alt="any2" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/slider/any3.png" alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <div>
                    Other component...
                </div>
            </Slider.Slide>
        </Slider>
    )
}              
                     
export default Component