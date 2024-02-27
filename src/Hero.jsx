import heroImg from './assets/hero.svg';
const Hero = () => {
    return (
        <section className='hero'>
            <div className='hero-center'>
                <div className='hero-title'>
                    <h1>Contenful CMS</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nesciunt pariatur a quisquam
                        repellendus sed reiciendis commodi, vitae modi excepturi nostrum earum nihil odit. Fugiat, eos
                        repudiandae! Totam, officia amet.
                    </p>
                </div>
                <div className='img-container'>
                    <img src={heroImg} alt='woman and the browser' className='img' />
                </div>
            </div>
        </section>
    );
};
export default Hero;
