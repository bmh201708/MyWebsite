import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css' 

export default function Home() {
  return (
    <main className={styles.main}>
      {/* 顶部导航栏 */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <Link href="/" className={styles.logoLink}>Jin Yike</Link>
          </div>
          <div className={styles.navLinks}>
            <Link href="/about" className={styles.navLink}>About</Link>
            <a href="#projects" className={styles.navLink}>Projects</a>
            <a href="#contact" className={styles.navLink}>Contact</a>
          </div>
        </div>
      </nav>

      <div className={styles.container}>
        {/* 主要内容区域 - 使用flexbox布局 */}
        <div className={styles.mainContent}>
          {/* 个人介绍文本区域 */}
          <div className={styles.textSection}>
            <div className={styles.textWithIcon}>
              <div className={styles.textContent}>
                <h1 className={styles.title}>Hello！ </h1>
                <h1 className={styles.title}>I'm Jin Yike</h1>
                <div className={styles.description}>
                  <p>
                    <span className={styles.inlineIconContainer}>
                      <Image
                        src="/images/Love.png"
                        alt="Love Icon"
                        width={60}
                        height={60}
                        className={styles.inlineIcon}
                      />
                    </span>ZJU  |  Junior Year   |  Designer  |  Developer</p>
                  <p>
                    <span className={styles.inlineIconContainer}>
                      <Image
                        src="/images/music.png"
                        alt="music Icon"
                        width={60}
                        height={60}
                        className={styles.inlineIcon}
                      />
                    </span>Like singing , drawing and art etc.</p>
                  <p>
                    <span className={styles.inlineIconContainer}>
                      <Image
                        src="/images/sun.png"
                        alt="sun Icon"
                        width={60}
                        height={60}
                        className={styles.inlineIcon}
                      />
                    </span>Everything to be continued...</p>
                </div>
              </div>
            </div>
            {/* 箭头图标 */}
            <div className={styles.arrowContainer}>
              <Image
                src="/images/Arrow.jpg"
                alt="Arrow Icon"
                width={80}
                height={80}
                className={styles.arrowIcon}
              />
              <span className={styles.aboutMeText}>About Me</span>
            </div>
          </div>

          {/* 个人资料图片 */}
          <div className={styles.profileImageContainer}>
            <Image
              src="/images/profile-image.png"
              alt="Jin Yike Profile"
              width={939}
              height={799}
              className={styles.profileImage}
              priority
            />
          </div>
        </div>

        {/* 底部卡片区域 */}
        <div className={styles.subtitle}>
            <h2>Portfolio</h2>
        </div>
        <div className={styles.cardsSection}>

          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h3>项目 1</h3>
              <p>项目描述...</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h3>项目 2</h3>
              <p>项目描述...</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h3>项目 3</h3>
              <p>项目描述...</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h3>项目 4</h3>
              <p>项目描述...</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
