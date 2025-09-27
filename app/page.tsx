import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* 顶部导航栏 */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <span>Jin Yike</span>
          </div>
          <div className={styles.navLinks}>
            <a href="#home" className={styles.navLink}>Home</a>
            <a href="#about" className={styles.navLink}>About</a>
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
            <h1 className={styles.title}>Hi！I'm Jin Yike</h1>
            <div className={styles.description}>
              <p>This is some desscription...</p>
              <p>xxxx</p>
              <p>xxxx</p>
              <p>xxxx</p>
              <p>xxxxx</p>
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
