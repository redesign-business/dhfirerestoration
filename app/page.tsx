const cta = "Request an estimate";

export default function Home() {
  return (
    <main>
      <div className="alert">
        <span>24/7/365 emergency response</span>
        <span>Most locations reached within 1 hour</span>
      </div>

      <nav aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="DH Construction home">
          <img src="/images/dh_logo_transparent-2ca3cd63f4.png" alt="DH Construction" />
        </a>
        <div className="navLinks">
          <a href="#services">Services</a>
          <a href="#work">Our work</a>
          <a href="#reviews">Reviews</a>
          <a href="#about">About</a>
        </div>
        <a className="button small" href="#estimate">{cta}</a>
      </nav>

      <section className="hero" id="top">
        <img
          className="heroImage"
          src="/images/houseext_b_a-570x570-84be3288fd.jpg"
          alt="Before and after exterior restoration by DH Construction"
        />
        <div className="heroShade" />
        <div className="heroContent">
          <p className="eyebrow light">Insurance reconstruction specialists since 1992</p>
          <h1>Disaster changed the picture.<br /><em>We’ll rebuild the rest.</em></h1>
          <p className="heroCopy">
            Residential and commercial large-loss reconstruction, handled by an experienced
            in-house team from first response to final walkthrough.
          </p>
          <a className="button" href="#estimate">{cta} <span aria-hidden="true">→</span></a>
        </div>
        <div className="beforeAfter"><span>Before</span><span>After</span></div>
      </section>

      <div className="proofBar" aria-label="Company highlights">
        <div><strong>1992</strong><span>Founded</span></div>
        <div><strong>300+</strong><span>Projects each year</span></div>
        <div><strong>50+</strong><span>In-house tradespeople</span></div>
        <div><strong>CA + NV</strong><span>Licensed</span></div>
      </div>

      <section className="intro" id="services">
        <div className="introCopy">
          <p className="eyebrow">A steady hand after the unexpected</p>
          <h2>One team. Every step back home.</h2>
          <p>
            Fire, water, and major property damage can turn life upside down. DH Construction
            brings estimating, insurance coordination, and skilled reconstruction under one roof,
            so progress stays clear and accountable.
          </p>
          <div className="serviceList">
            <div><b>01</b><span><strong>Emergency securing</strong>Board-up, plumbing, heating, and electrical help.</span></div>
            <div><b>02</b><span><strong>Insurance coordination</strong>Large-loss specialists who know the claims process.</span></div>
            <div><b>03</b><span><strong>Complete reconstruction</strong>Dedicated in-house trades from structure to finish.</span></div>
          </div>
          <a className="textCta" href="#estimate">{cta} <span>→</span></a>
        </div>
        <div className="introVisual">
          <img src="/images/livingroom_b_a-570x570-fc6867679a.jpg" alt="Living room before and after reconstruction" />
          <div className="stamp">Large-loss<br />specialists</div>
        </div>
      </section>

      <section className="experience" id="about">
        <div className="experienceImage">
          <img src="/images/ralph-440x440-2a89d63983.jpg" alt="Ralph Dinwiddie, founder of DH Construction" />
          <p>Ralph Dinwiddie<br /><span>Founding Partner &amp; President</span></p>
        </div>
        <div className="experienceCopy">
          <p className="eyebrow light">Built on workmanship</p>
          <h2>Rebuilding lives for more than three decades.</h2>
          <p>
            Ralph Dinwiddie earned his California General Contractor’s License in 1978. After the
            insurance industry recognized his workmanship and character, DH Construction was
            founded in 1992 to specialize in insurance reconstruction.
          </p>
          <div className="experienceNumbers">
            <div><strong>300+</strong><span>projects handled annually</span></div>
            <div><strong>50+</strong><span>full-time skilled tradespeople</span></div>
          </div>
          <a className="button outline" href="#estimate">{cta} <span>→</span></a>
        </div>
      </section>

      <section className="work" id="work">
        <div className="sectionHeading">
          <div><p className="eyebrow">Proof is in the finish</p><h2>Spaces restored.<br />Lives restarted.</h2></div>
          <p>From family homes to commercial properties, our crews rebuild for the way you need to live and work next.</p>
        </div>
        <div className="workGrid">
          <figure className="wide">
            <img src="/images/dh_ba_kit3-570x570-2bc02dfdda.jpg" alt="Kitchen before and after restoration" />
            <figcaption><span>Residential</span><strong>Kitchens made whole again</strong></figcaption>
          </figure>
          <figure>
            <img src="/images/office2_b_a-570x570-2f0c5d5998.jpg" alt="Commercial office before and after restoration" />
            <figcaption><span>Commercial</span><strong>Back to business</strong></figcaption>
          </figure>
          <figure>
            <img src="/images/dh_ba_bath4-570x570-68180388ad.jpg" alt="Bathroom before and after restoration" />
            <figcaption><span>Residential</span><strong>Care in every detail</strong></figcaption>
          </figure>
        </div>
        <a className="textCta centered" href="#estimate">{cta} <span>→</span></a>
      </section>

      <section className="credentials">
        <div className="credentialVisual">
          <img src="/images/commercial-740x350-9bece91b3e.png" alt="Commercial property illustration" />
        </div>
        <div className="credentialCopy">
          <p className="eyebrow light">Qualified where it counts</p>
          <h2>Licensed, accredited, and ready across the region.</h2>
          <p>
            Licensed in California and Nevada, DH Construction serves communities from Stockton to
            Redding and Reno to Fairfield. We are BBB accredited and active in leading restoration
            and property management associations.
          </p>
          <div className="logos" aria-label="Professional affiliations">
            <div><img src="/images/logo_bbb-be9b66e6d9.png" alt="Better Business Bureau" /></div>
            <div><img src="/images/logo_commassocinst-a158798a9e.png" alt="Community Associations Institute" /></div>
            <div><img src="/images/logo_narpm-86c1c7af9d.png" alt="National Association of Residential Property Managers" /></div>
            <div><img src="/images/logo_nvclaims-0439a6e34d.png" alt="Nevada Claims Association" /></div>
          </div>
          <a className="button" href="#estimate">{cta} <span>→</span></a>
        </div>
      </section>

      <section className="reviews" id="reviews">
        <div className="reviewsTitle">
          <p className="eyebrow">Trusted when it matters most</p>
          <h2>Five-star care,<br />in their words.</h2>
          <div className="rating">★★★★★ <span>5-star reviews on Yelp &amp; Facebook</span></div>
        </div>
        <article className="featuredReview">
          <span className="quote">“</span>
          <blockquote>
            I’d give DH 10 stars if I could. We had a major and complicated job to be done, and
            they did it efficiently, responsibly, and as FAST as was possible.
          </blockquote>
          <div className="reviewer">
            <img src="/images/claudiak-100x100-5442c29683.jpg" alt="Claudia K." />
            <p><strong>Claudia K.</strong><span>Yelp review</span></p>
          </div>
        </article>
        <article className="smallReview">
          <blockquote>“They put our home back together after a flood and stood by all their work, no questions asked.”</blockquote>
          <div className="reviewer">
            <img src="/images/testimonial_mc-100x100-9db3033410.jpg" alt="Michael Cuccia" />
            <p><strong>Michael Cuccia</strong><span>Facebook review</span></p>
          </div>
        </article>
      </section>

      <section className="faq">
        <div className="faqImage">
          <img src="/images/dh_ba_fam2-570x570-73df28be70.jpg" alt="Family room before and after restoration" />
          <div><strong>24/7</strong><span>Emergency support,<br />365 days a year</span></div>
        </div>
        <div className="faqCopy">
          <p className="eyebrow">What happens next</p>
          <h2>Answers in a difficult moment.</h2>
          <details open>
            <summary>How quickly can you respond?</summary>
            <p>Our emergency team responds within one hour to most locations, with stocked vehicles ready to secure your property.</p>
          </details>
          <details>
            <summary>Do you work with insurance companies?</summary>
            <p>Yes. Insurance-related reconstruction is our specialty, with hundreds of cumulative years of estimating and claims experience.</p>
          </details>
          <details>
            <summary>Can you handle a large or commercial loss?</summary>
            <p>Yes. We specialize in large-loss claims for both residential and commercial properties.</p>
          </details>
          <details>
            <summary>Where do you work?</summary>
            <p>Our licensed California and Nevada teams serve a broad region from Stockton to Redding and Reno to Fairfield.</p>
          </details>
        </div>
      </section>

      <section className="finalCta" id="estimate">
        <img src="/images/dh_ba_ext2-570x570-c3836044c8.jpg" alt="Restored home exterior" />
        <div className="finalShade" />
        <div>
          <p className="eyebrow light">Your next chapter starts here</p>
          <h2>Let’s put it back together.</h2>
          <p>Tell us what happened. Our team is ready to listen, guide, and rebuild.</p>
          <a className="button" href="mailto:info@dhfirerestoration.com">{cta} <span>→</span></a>
        </div>
      </section>

      <footer>
        <img src="/images/dh_logo_transparent_white-0f6f8e859f.png" alt="DH Construction" />
        <p>Insurance reconstruction for residential and commercial properties since 1992.</p>
        <div className="locations">
          <p><strong>Sacramento</strong>4324 Orange Grove Ave.<br />Sacramento, CA</p>
          <p><strong>Reno / Tahoe</strong>1105 Freeport Blvd.<br />Sparks, NV</p>
          <p><strong>Chico</strong>3851 Morrow Lane, Ste. 14<br />Chico, CA</p>
        </div>
        <div className="footerBottom"><span>© 2026 DH Construction, Inc.</span><span>Licensed in California &amp; Nevada</span></div>
      </footer>

      <style>{`
        :global(*){box-sizing:border-box} :global(html){scroll-behavior:smooth} :global(body){margin:0;background:#f4f1eb;color:#171b1d;font-family:Arial,Helvetica,sans-serif} :global(a){color:inherit;text-decoration:none} :global(img){display:block;max-width:100%}
        main{overflow:hidden}.alert{height:38px;background:#e45b2b;color:white;display:flex;align-items:center;justify-content:center;gap:42px;font-size:11px;font-weight:800;letter-spacing:.15em;text-transform:uppercase}.alert span+span:before{content:'•';margin-right:42px}
        nav{height:94px;background:#fff;display:flex;align-items:center;padding:0 5vw;gap:38px;position:relative;z-index:5}.brand img{width:175px}.navLinks{display:flex;gap:30px;margin-left:auto}.navLinks a{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.1em}.button{display:inline-flex;align-items:center;justify-content:center;gap:24px;background:#e45b2b;color:#fff;padding:18px 24px;font-size:11px;font-weight:900;letter-spacing:.13em;text-transform:uppercase;transition:.2s}.button:hover{background:#c7461b}.button.small{padding:15px 20px}.button.outline{background:transparent;border:1px solid #819096}.button.outline:hover{border-color:white}
        .hero{height:690px;position:relative;color:white;display:flex;align-items:center}.heroImage,.heroShade{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.heroShade{background:linear-gradient(90deg,rgba(12,22,26,.93) 0%,rgba(12,22,26,.7) 48%,rgba(12,22,26,.1) 78%)}.heroContent{position:relative;z-index:1;width:720px;margin-left:8vw}.eyebrow{color:#d94f20;font-size:11px;font-weight:900;letter-spacing:.19em;text-transform:uppercase;margin:0 0 20px}.eyebrow.light{color:#ff8c61}.hero h1,.hero h2,h2{font-family:Georgia,'Times New Roman',serif}.hero h1{font-size:67px;line-height:1.02;letter-spacing:-.035em;margin:0 0 26px;font-weight:400}.hero h1 em{color:#f0784d;font-weight:400}.heroCopy{font-family:Georgia,serif;font-size:18px;line-height:1.65;max-width:590px;color:#dae0e1;margin:0 0 34px}.beforeAfter{position:absolute;right:5vw;bottom:28px;display:flex;justify-content:space-between;width:39%;font-size:10px;letter-spacing:.18em;text-transform:uppercase;font-weight:800}.proofBar{display:grid;grid-template-columns:repeat(4,1fr);background:white;padding:30px 7vw;border-bottom:1px solid #d8d6d0}.proofBar div{display:flex;align-items:center;justify-content:center;gap:13px;border-right:1px solid #d8d6d0}.proofBar div:last-child{border:0}.proofBar strong{font-family:Georgia,serif;font-size:31px;color:#e45b2b}.proofBar span{text-transform:uppercase;font-size:9px;font-weight:800;letter-spacing:.15em;line-height:1.4}
        .intro{padding:120px 8vw;display:grid;grid-template-columns:.9fr 1.1fr;gap:9vw;align-items:center}.introCopy h2,.sectionHeading h2,.faq h2{font-size:52px;line-height:1.06;font-weight:400;letter-spacing:-.035em;margin:0 0 28px}.introCopy>p:not(.eyebrow),.experienceCopy>p:not(.eyebrow),.credentialCopy>p:not(.eyebrow){font-family:Georgia,serif;color:#5d6465;line-height:1.75;font-size:16px}.serviceList{border-top:1px solid #cbc9c3;margin:36px 0 30px}.serviceList>div{display:flex;gap:20px;border-bottom:1px solid #cbc9c3;padding:17px 0}.serviceList b{color:#e45b2b;font-size:10px}.serviceList span{font-size:12px;color:#696e6f}.serviceList strong{display:block;color:#171b1d;text-transform:uppercase;letter-spacing:.1em;font-size:11px;margin-bottom:5px}.textCta{font-size:11px;font-weight:900;letter-spacing:.14em;text-transform:uppercase;border-bottom:2px solid #e45b2b;padding-bottom:7px}.textCta span{color:#e45b2b;margin-left:18px}.introVisual{position:relative}.introVisual img{width:100%;aspect-ratio:1/1;object-fit:cover}.stamp{position:absolute;left:-54px;bottom:42px;width:110px;height:110px;border-radius:50%;background:#e45b2b;color:#fff;display:grid;place-items:center;text-align:center;text-transform:uppercase;font-size:10px;line-height:1.5;font-weight:bold;letter-spacing:.1em;transform:rotate(-8deg)}
        .experience{background:#1d292d;color:white;display:grid;grid-template-columns:1fr 1fr}.experienceImage{position:relative;min-height:650px}.experienceImage>img{width:100%;height:100%;object-fit:cover;filter:saturate(.75)}.experienceImage>p{position:absolute;bottom:25px;left:35px;background:white;color:#1d292d;padding:16px 22px;margin:0;text-transform:uppercase;font-weight:800;font-size:11px;letter-spacing:.1em}.experienceImage>p span{display:block;color:#8a8d8c;font-size:8px;margin-top:5px}.experienceCopy{padding:100px 8vw 80px 7vw;display:flex;flex-direction:column;align-items:flex-start;justify-content:center}.experienceCopy h2,.credentialCopy h2{font-size:51px;line-height:1.08;font-weight:400;letter-spacing:-.03em;margin:0 0 25px}.experienceCopy>p:not(.eyebrow){color:#bfc7c9}.experienceNumbers{display:flex;gap:60px;margin:30px 0 36px}.experienceNumbers div{display:flex;flex-direction:column}.experienceNumbers strong{font-family:Georgia,serif;color:#f0784d;font-size:42px;font-weight:400}.experienceNumbers span{font-size:9px;text-transform:uppercase;letter-spacing:.12em;color:#bcc5c7}
        .work{padding:120px 6vw;background:#f4f1eb}.sectionHeading{display:flex;justify-content:space-between;align-items:end;margin:0 2vw 55px}.sectionHeading h2{margin:0}.sectionHeading>p{width:350px;color:#62696b;font-family:Georgia,serif;line-height:1.7}.workGrid{display:grid;grid-template-columns:1.35fr 1fr 1fr;gap:16px}.workGrid figure{margin:0;position:relative;height:470px;overflow:hidden}.workGrid img{width:100%;height:100%;object-fit:cover;transition:.4s}.workGrid figure:hover img{transform:scale(1.025)}.workGrid figcaption{position:absolute;inset:auto 0 0;padding:55px 25px 24px;color:white;background:linear-gradient(transparent,rgba(11,18,20,.9))}.workGrid figcaption span,.workGrid figcaption strong{display:block}.workGrid figcaption span{font-size:9px;text-transform:uppercase;letter-spacing:.17em;color:#ff9169;margin-bottom:8px}.workGrid figcaption strong{font-family:Georgia,serif;font-size:22px;font-weight:400}.centered{display:table;margin:45px auto 0}
        .credentials{display:grid;grid-template-columns:.85fr 1.15fr;background:#27383e;color:white;min-height:610px}.credentialVisual{margin:70px 0 70px 6vw;background:#e6e1d8;display:grid;place-items:center;overflow:hidden}.credentialVisual img{width:75%;image-rendering:auto}.credentialCopy{padding:80px 9vw 70px 7vw;display:flex;flex-direction:column;align-items:flex-start;justify-content:center}.credentialCopy>p:not(.eyebrow){color:#c2cacb}.logos{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;width:100%;margin:28px 0 35px}.logos div{height:68px;background:white;display:grid;place-items:center;padding:12px}.logos img{max-height:43px;max-width:90px}
        .reviews{padding:120px 8vw;display:grid;grid-template-columns:.8fr 1.2fr;gap:28px}.reviewsTitle{grid-row:span 2;padding-right:5vw}.reviewsTitle h2{font-size:55px;line-height:1.05;font-weight:400;margin:0 0 30px}.rating{color:#e45b2b;letter-spacing:.1em;font-size:16px}.rating span{display:block;color:#6b7070;text-transform:uppercase;font-size:8px;font-weight:bold;letter-spacing:.13em;margin-top:9px}.featuredReview,.smallReview{background:white;padding:42px 50px;position:relative}.featuredReview{border-left:4px solid #e45b2b}.quote{position:absolute;right:30px;top:12px;font-family:Georgia,serif;font-size:90px;line-height:1;color:#efe7df}.reviews blockquote{font-family:Georgia,serif;font-size:21px;line-height:1.55;margin:0 0 28px;position:relative}.smallReview blockquote{font-size:16px}.reviewer{display:flex;align-items:center;gap:13px}.reviewer img{width:45px;height:45px;border-radius:50%;object-fit:cover}.reviewer p{margin:0;font-size:10px;text-transform:uppercase;letter-spacing:.1em}.reviewer strong,.reviewer span{display:block}.reviewer span{color:#898d8d;font-size:8px;margin-top:5px}
        .faq{display:grid;grid-template-columns:1fr 1fr;min-height:660px;background:white}.faqImage{position:relative}.faqImage>img{width:100%;height:100%;object-fit:cover}.faqImage>div{position:absolute;right:0;bottom:0;background:#e45b2b;color:white;padding:28px 34px;display:flex;align-items:center;gap:18px}.faqImage strong{font:38px Georgia,serif}.faqImage span{text-transform:uppercase;font-size:8px;line-height:1.5;letter-spacing:.13em}.faqCopy{padding:85px 8vw 70px 7vw}.faq details{border-top:1px solid #d5d3ce;padding:20px 0}.faq details:last-child{border-bottom:1px solid #d5d3ce}.faq summary{cursor:pointer;font-family:Georgia,serif;font-size:18px;list-style:none}.faq summary:after{content:'+';float:right;color:#e45b2b}.faq details[open] summary:after{content:'−'}.faq details p{color:#6b7071;line-height:1.6;font-size:13px;padding-right:20px}
        .finalCta{height:570px;position:relative;display:grid;place-items:center;text-align:center;color:white}.finalCta>img,.finalShade{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.finalShade{background:rgba(16,28,33,.8)}.finalCta>div:last-child{position:relative;z-index:1}.finalCta h2{font-size:60px;font-weight:400;margin:0 0 16px}.finalCta p:not(.eyebrow){font-family:Georgia,serif;color:#d2d9da;margin-bottom:30px}
        footer{background:#121c20;color:#b8c0c2;padding:65px 7vw 22px;display:grid;grid-template-columns:.8fr .9fr 1.7fr;gap:60px;align-items:start}footer>img{width:170px;filter:brightness(2)}footer>p{font-family:Georgia,serif;font-size:13px;line-height:1.7;margin:0}.locations{display:grid;grid-template-columns:repeat(3,1fr);gap:25px}.locations p{margin:0;font-size:10px;line-height:1.7}.locations strong{display:block;color:#fff;text-transform:uppercase;letter-spacing:.1em;font-size:9px;margin-bottom:6px}.footerBottom{grid-column:1/-1;border-top:1px solid #344045;margin-top:25px;padding-top:20px;display:flex;justify-content:space-between;font-size:8px;text-transform:uppercase;letter-spacing:.12em}
        @media(max-width:900px){.navLinks{display:none}.button.small{margin-left:auto}.hero{height:650px}.heroContent{margin:0 7vw;width:auto}.hero h1{font-size:52px}.proofBar{grid-template-columns:1fr 1fr;gap:20px}.proofBar div:nth-child(2){border:0}.intro{grid-template-columns:1fr;padding:90px 8vw}.introVisual{max-width:600px}.experience{grid-template-columns:1fr}.experienceImage{min-height:520px}.workGrid{grid-template-columns:1fr 1fr}.workGrid .wide{grid-column:1/-1}.credentials{grid-template-columns:1fr}.credentialVisual{margin:60px 8vw 0;min-height:300px}.reviews{grid-template-columns:1fr}.reviewsTitle{grid-row:auto}.faq{grid-template-columns:1fr}.faqImage{height:500px}footer{grid-template-columns:1fr 1fr}.locations{grid-column:1/-1}}
        @media(max-width:600px){.alert{gap:0;justify-content:center}.alert span:nth-child(2){display:none}nav{height:76px;padding:0 20px}.brand img{width:135px}.button.small{font-size:8px;padding:12px}.hero{height:610px}.hero h1{font-size:42px}.heroCopy{font-size:16px}.beforeAfter{display:none}.proofBar{padding:24px 18px}.proofBar strong{font-size:25px}.proofBar span{font-size:7px}.intro{padding:75px 24px}.introCopy h2,.sectionHeading h2,.faq h2,.experienceCopy h2,.credentialCopy h2,.reviewsTitle h2{font-size:39px}.stamp{left:-12px;width:90px;height:90px}.experienceImage{min-height:420px}.experienceCopy,.credentialCopy,.faqCopy{padding:70px 24px}.experienceNumbers{gap:25px}.work{padding:75px 20px}.sectionHeading{display:block}.sectionHeading>p{width:auto}.workGrid{grid-template-columns:1fr}.workGrid .wide{grid-column:auto}.workGrid figure{height:390px}.credentialVisual{margin:35px 24px 0}.logos{grid-template-columns:1fr 1fr}.reviews{padding:75px 24px}.featuredReview,.smallReview{padding:35px 27px}.faqImage{height:400px}.finalCta{height:520px;padding:0 24px}.finalCta h2{font-size:43px}footer{grid-template-columns:1fr;padding:55px 24px 20px}.locations{grid-template-columns:1fr;grid-column:auto}.footerBottom{gap:20px}.footerBottom span:last-child{text-align:right}}
      `}</style>
    </main>
  );
}
