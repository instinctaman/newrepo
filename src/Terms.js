
function Terms() {
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
    <section style={styles.main} class="terms">
    <h1>📄 Terms of Use | उपयोग की शर्तें</h1>
    <p><strong>Effective Date / प्रभावी तिथि:</strong> June 27, 2025 / 27 जून 2025</p>

    <div class="lang-section">
      <h2>1. Website Use / वेबसाइट का उपयोग</h2>
      <div class="en">This site is for personal and non-commercial use only.</div>
      <div class="hi">यह साइट केवल व्यक्तिगत और गैर-व्यावसायिक उपयोग के लिए है।</div>
    </div>

    <div class="lang-section">
      <h2>2. Intellectual Property / बौद्धिक संपदा</h2>
      <div class="en">All content belongs to Aman Kumar Gautam unless otherwise stated.</div>
      <div class="hi">सभी सामग्री अमन कुमार गौतम की है जब तक अन्यथा उल्लेख न किया गया हो।</div>
    </div>

    <div class="lang-section">
      <h2>3. Disclaimer / अस्वीकरण</h2>
      <div class="en">This site is provided "as is". We are not responsible for any issues.</div>
      <div class="hi">यह साइट "जैसी है" के आधार पर प्रदान की जाती है। किसी भी समस्या के लिए हम ज़िम्मेदार नहीं हैं।
      </div>
    </div>

    <div class="lang-section">
      <h2>4. External Links / बाहरी लिंक</h2>
      <div class="en">We are not responsible for the content of external sites.</div>
      <div class="hi">हम बाहरी साइटों की सामग्री के लिए ज़िम्मेदार नहीं हैं।</div>
    </div>

    <div class="lang-section">
      <h2>5. Changes / परिवर्तन</h2>
      <div class="en">We may update these terms at any time. Continued use means acceptance.</div>
      <div class="hi">हम किसी भी समय इन शर्तों को अपडेट कर सकते हैं। जारी उपयोग का मतलब है कि आप सहमत हैं।</div>
    </div>
  </section>
  );
}
export default Terms;