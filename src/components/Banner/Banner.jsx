import Button from '../Button/Button';
import styles from './styles.module.scss';

function Banner() {
    const { container, content, title, des, video } = styles;
    return (
        <div className={container}>
            <video className={video} autoPlay muted loop>
                <source
                    src='src\assets\videos\Video1_720p.mp4'
                    type='video/mp4'
                />
                Your browser does not support the video tag.
            </video>
            <div className={content}>
                <h1 className={title}>60 YEARS OF LOUD</h1>
                <div className={des}>
                    Give your guests an audio experience to match their
                    surroundings
                </div>
                <Button content={'EXPLORE MARSHALL'} />
            </div>
        </div>
    );
}

export default Banner;
