function Privacy() {
    const styles = {
        main: {
            marginTop: '120px',
            marginBottom: '40px',
            // textAlign: 'center',
            overflowX: 'hidden',
            color: '#fff',
        },
    };
    return (
        <>
            <section style={styles.main} className="terms">
                <h1>🔒 Privacy Notice | गोपनीयता सूचना</h1>
                <p><strong>Effective Date / प्रभावी तिथि:</strong> June 27, 2025 / 27 जून 2025</p>

                <div className="lang-section">
                    <h2>1. Information We Collect / हम कौन सी जानकारी इकट्ठा करते हैं</h2>
                    <div className="en">
                        - Contact Form: Name, email, message<br />
                        - Cookies: For site functionality and analytics<br />
                        - Log Data: Browser type, IP, pages visited
                    </div>
                    <div className="hi">
                        - संपर्क फ़ॉर्म: नाम, ईमेल, संदेश<br />
                        - कुकीज़: कार्यक्षमता और विश्लेषण के लिए<br />
                        - लॉग डेटा: ब्राउज़र, IP पता, देखे गए पृष्ठ
                    </div>
                </div>

                <div className="lang-section">
                    <h2>2. How We Use Information / हम जानकारी का उपयोग कैसे करते हैं</h2>
                    <div className="en">
                        - To respond to inquiries<br />
                        - To improve our website and services<br />
                        - To analyze traffic with tools like Google Analytics
                    </div>
                    <div className="hi">
                        - आपके सवालों के जवाब देने के लिए<br />
                        - साइट और सेवाओं में सुधार करने के लिए<br />
                        - ट्रैफ़िक विश्लेषण के लिए (जैसे Google Analytics)
                    </div>
                </div>

                <div className="lang-section">
                    <h2>3. Data Sharing / डेटा साझा करना</h2>
                    <div className="en">We do not sell, trade, or rent your personal information.</div>
                    <div className="hi">हम आपकी व्यक्तिगत जानकारी को बेचते, साझा या किराए पर नहीं देते।</div>
                </div>

                <div className="lang-section">
                    <h2>4. Data Security / डेटा सुरक्षा</h2>
                    <div className="en">We use standard security practices but cannot guarantee complete protection.</div>
                    <div className="hi">हम मानक सुरक्षा उपाय अपनाते हैं, लेकिन पूर्ण सुरक्षा की गारंटी नहीं दे सकते।</div>
                </div>

                <div className="lang-section">
                    <h2>5. Your Rights / आपके अधिकार</h2>
                    <div className="en">You can request a copy, correction, or deletion of your data anytime.</div>
                    <div className="hi">आप कभी भी अपने डेटा की प्रति, सुधार या हटाने का अनुरोध कर सकते हैं।</div>
                </div>

                <div className="lang-section">
                    <h2>6. Contact / संपर्क</h2>
                    <div className="en">Email: instinctak07@gmail.com</div>
                    <div className="hi">ईमेल: instinctak07@gmail.com</div>
                </div>
            </section>
        </>
    )
}
export default Privacy;