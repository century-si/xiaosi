import styles from '@/app/ui/home.module.css'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20'>
        <div className={styles.shape}></div>
      </div>
    </main>
  )
}
