import React from "react"
import ContentImage from "../images/content.png"


export default class Content extends React.Component {
    constructor(props) {
        super(props);

        this.elementRef = React.createRef();
        this.onObserve = this.onObserve.bind(this);
    }

    componentDidMount() {
        let threshold = [];
        for (let i=0; i<=1.0; i+= 0.001) {
            threshold.push(i);
        }

        const observer = new IntersectionObserver(this.onObserve, {
            rootMargin: '0px',
            threshold,
        });

        observer.observe(this.elementRef.current);
    }

    onObserve(entries) {
        const { setIsHeaderFixed } = this.props;
        setIsHeaderFixed(entries[0].boundingClientRect.top <= 0);
    }

    render() {
        return <img style={{ margin: 0, display: 'block', position: 'relative', zIndex: 2, width: '100%' }} ref={this.elementRef} alt="content" src={ContentImage} />
    }
}
