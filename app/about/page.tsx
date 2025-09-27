import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function About() {
  return (
    <main className={styles.main}>
      {/* 顶部导航栏 */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <Link href="/" className={styles.logoLink}>Jin Yike</Link>
          </div>
          <div className={styles.navLinks}>
            <Link href="/about" className={styles.navLinkActive}>About</Link>
            <Link href="/#projects" className={styles.navLink}>Projects</Link>
            <Link href="/#contact" className={styles.navLink}>Contact</Link>
          </div>
        </div>
      </nav>

      <div className={styles.container}>
        {/* About 页面主要内容 */}
        <div className={styles.aboutContent}>
          <div className={styles.aboutHeader}>
            <h1 className={styles.aboutTitle}>About Me</h1>
            <div className={styles.aboutSubtitle}>
              <p>Designer • Developer • Creator</p>
            </div>
          </div>

          <div className={styles.aboutBody}>
            <div className={styles.aboutText}>
              <div className={styles.textSection}>
                <h2>Hello! I'm Jin Yike</h2>
                <p>
                  I'm a junior year student at Zhejiang University (ZJU), passionate about 
                  design and development. I love creating beautiful and functional digital 
                  experiences that make a difference.
                </p>
                
                <h3>Skills</h3>
                <div className={styles.skillsGrid}>
                  <div className={styles.skillItem}>
                    <div className={styles.skillIcon}>
                      <Image
                        src="/images/light.png"
                        alt="Design"
                        width={80}
                        height={80}
                      />
                    </div>
                    <div className={styles.skillContent}>
                      <h4>Design</h4>
                      <p>Photoshop, Illustrator, Figma, Rhino , Keyshot, 3Dmax, Unity etc.</p>
                    </div>
                  </div>
                  
                  <div className={styles.skillItem}>
                    <div className={styles.skillIcon}>
                      <Image
                        src="/images/Coffee.png"
                        alt="Development"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className={styles.skillContent}>
                      <h4>Development & Programming</h4>
                      <p>Vue,Next.js, Node.js, Python, Java, C++ etc.</p>
                      <p>Frontend and backend development</p>
                    </div>
                  </div>
                  
                  <div className={styles.skillItem}>
                    <div className={styles.skillIcon}>
                      <Image
                        src="/images/flower.png"
                        alt="Art"
                        width={70}
                        height={70}
                      />
                    </div>
                    <div className={styles.skillContent}>
                      <h4>Research</h4>
                      <p>Human-Computer Interaction</p>
                    </div>
                  </div>
                </div>

                 <h3>Educational Experience</h3>
                 <div className={styles.educationTable}>
                   <table>
                     <thead>
                       <tr>
                         <th>Institution</th>
                         <th>Period</th>
                         <th>Status</th>
                       </tr>
                     </thead>
                     <tbody>
                       <tr>
                         <td>Hangzhou No.2 High School</td>
                         <td>2020-2023</td>
                         <td>Graduated</td>
                       </tr>
                       <tr>
                         <td>Zhejiang University</td>
                         <td>2023-now</td>
                         <td>Current</td>
                       </tr>
                     </tbody>
                   </table>
                 </div>
                
                <h3>Honors and Awards</h3>
                <div className={styles.awardsTable}>
                  <table>
                    <thead>
                      <tr>
                        <th>Award</th>
                        <th>Year</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>National Olympiad in Informatics in Provinces(NOIP) first prize</td>
                        <td>2021</td>
                      </tr>
                      <tr>
                        <td>Zhejiang University Second-Class Scholarship</td>
                        <td>2024</td>
                      </tr>
                      <tr>
                        <td>Zhejiang University NITORY International Scholarship</td>
                        <td>2024</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div className={styles.aboutImage}>
              <Image
                src="/images/me.jpg"
                alt="Jin Yike Profile"
                width={400}
                height={400}
                className={styles.profileImage}
                priority
              />
            </div>
          </div>

          <div className={styles.backToHome}>
            <Link href="/" className={styles.backButton}>
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
