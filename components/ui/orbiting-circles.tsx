import styles from '@/components/orbiting-circle.module.css';

export default function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true,
}: {
  className?: string
  children?: React.ReactNode
  reverse?: boolean
  duration?: number
  delay?: number
  radius?: number
  path?: boolean
}) {
  return (
    <>
      {path && (
        <div className={styles.svgWrapper}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            className="size-full"
          >
            <circle
              className={styles.svgCircle}
              cx="50%"
              cy="50%"
              r={radius}
              fill="none"
              strokeDasharray="4 4"
            />
          </svg>
        </div>
      )}

      <div
        style={
          {
            '--duration': `${duration}s`,
            '--radius': `${radius}px`,
            '--delay': `${delay}s`,
          } as React.CSSProperties
        }
        className={`${styles.animateOrbit} ${reverse ? styles.reverse : ''} ${className}`}
      >
        {children}
      </div>
    </>
  );
}
