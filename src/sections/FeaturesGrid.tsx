const listItems = [
    'Experience unparalleled security and scalability',
    'Fully benefit from scalable network effects'
,'Unlock the potential of decentralized network']
export const FeaturesGrid = () => {
    return (
        <section>
            <div className="container">
                <h2>Empowering the future of blockchain.</h2>
                <p>Blockforge provides robust and infrastructure to support the next generation of decentralized applications.</p>
            </div>
            <ul>
                {listItems.map((item) => (
                    <span>{item}</span>
                ))}
            </ul>
        </section>
    );
}
