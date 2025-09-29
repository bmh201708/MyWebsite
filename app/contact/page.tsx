import Image from 'next/image'
import Link from 'next/link'
import styles from './contact.module.css'
import { getAssetPath } from '../utils/paths'

export default function Contact() {
  // 动态字体样式注入
  const fontStyles = `
    @font-face {
      font-family: 'StorylandSansSerif';
      src: local('StorylandSansSerif'),
           url('${getAssetPath('/fonts/StorylandSansSerif.ttf')}') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'Ugly Dave';
      src: local('Ugly Dave'),
           url('${getAssetPath('/fonts/Ugly Dave-Regular.otf')}') format('opentype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: fontStyles }} />
      <main className={styles.main}>
      {/* 顶部导航栏 */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <Link href="/" className={styles.logoLink}>Jin Yike</Link>
          </div>
          <div className={styles.navLinks}>
            <Link href="/about" className={styles.navLink}>About</Link>
            <Link href="/#projects" className={styles.navLink}>Projects</Link>
            <Link href="/contact" className={styles.navLinkActive}>Contact</Link>
          </div>
        </div>
      </nav>

      <div className={styles.container}>
        <div className={styles.contactContent}>
          {/* 页面标题 */}
          <div className={styles.titleSection}>
            <h1 className={styles.pageTitle}>Contact me</h1>
            <p className={styles.subtitle}>Welcome to contact me</p>
          </div>

          {/* 联系信息卡片 */}
          <div className={styles.contactCard}>
            <div className={styles.emailSection}>
              <div className={styles.iconContainer}>
                <div className={styles.emailIcon}>✉️</div>
              </div>
              <div className={styles.emailInfo}>
                <h2 className={styles.emailTitle}>Email</h2>
                <a href="mailto:3230103159@zju.edu.cn" className={styles.emailAddress}>
                  3230103159@zju.edu.cn
                </a>
                <p className={styles.emailDescription}>
                  If you have any questions or cooperation intentions, please contact me through email
                </p>
              </div>
            </div>

            {/* 其他联系方式（可选） */}
            <div className={styles.additionalInfo}>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>🎓</span>
                <span className={styles.infoText}>Zhejiang University</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📍</span>
                <span className={styles.infoText}>Hangzhou, China</span>
              </div>
            </div>
          </div>

          {/* 返回首页按钮 */}
          <div className={styles.backSection}>
            <Link href="/" className={styles.backButton}>
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}
