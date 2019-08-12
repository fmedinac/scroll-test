import React from "react"
import FooterImage from "../images/footer.png"

const headerHeight = 50;

export default class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.elementRef = React.createRef();
        this.containerRef = React.createRef();
        this.onObserve = this.onObserve.bind(this);

        this.state = {
            isVisible: false,
            isFixed: true
        }
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

        observer.observe(this.containerRef.current);
    }

    onObserve(entries) {
        const isVisible = entries[0].isIntersecting;
        this.setState({ isVisible });

        if (isVisible) {
            const top = entries[0].boundingClientRect.top - headerHeight;
            this.setState({ isFixed: top > 0 })
        } else {
            this.setState({ isFixed: true })
        }
    }

    render() {
        const { isFixed, isVisible } = this.state;

        return (
            <div
                style={{
                    position: 'relative',
                    minHeight: '100vh',
                    visibility: isVisible ? 'visible': 'hidden',
                }}
                ref={this.containerRef}>
                    <img
                        style={{
                            position: isFixed ? 'fixed' : 'absolute',
                            top: isFixed ? headerHeight : 0,
                            width: '100%',
                        }}
                        ref={this.elementRef}
                        alt="content"
                        src={FooterImage}
                    />
            </div>
        );
    }
}
