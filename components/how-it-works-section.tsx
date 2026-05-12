export const HowItWorksSection = () => {
    return (
        <section className="section" id="how">
            <div className="container mx-auto">

                <div className="section-head center">
                    <div className="ml text-[var(--primary)] text-[12px] 2xl:text-xl font-extrabold uppercase tracking-[0.05em][font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,Arial,sans-serif]">How It Works</div>
                    <h2 className="text-[40px] mt-[6px] mb-[10px] 2xl:text-[45px]">From Cameras to Operational Intelligence</h2>
                    <p className="pb-15 text-[var(--text-secondary)] text-[18px] 2xl:text-xl">
                        MetaCiti works with existing roadway infrastructure to provide AI-driven traffic awareness.
                    </p>
                </div>

                <div className="steps">

                    <div className="step">
                        <div className="step-no 2xl:text-xl">1</div>
                        <h3 className="font-bold 2xl:text-2xl">Connect Infrastructure</h3>
                        <p className="2xl:text-xl">
                            Integrate roadway cameras and selected sensors into the MetaCiti platform.
                        </p>
                    </div>

                    <div className="step">
                        <div className="step-no 2xl:text-xl">2</div>
                        <h3 className="font-bold 2xl:text-2xl">AI Interprets Activity</h3>
                        <p className="2xl:text-xl">
                            AI models analyze traffic flow, incidents, and movement patterns.
                        </p>
                    </div>

                    <div className="step">
                        <div className="step-no 2xl:text-xl">3</div>
                        <h3 className="font-bold 2xl:text-2xl">Operators Receive Alerts</h3>
                        <p className="2xl:text-xl">
                            Traffic operators see alerts, analytics, and digital twin visualization.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    )
}