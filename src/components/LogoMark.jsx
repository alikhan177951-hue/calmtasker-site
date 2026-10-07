export default function LogoMark({ size = 44, className = '' }) {
  return (
    <span className={`logo-plate ${className}`} style={{ width: size, height: size }}>
      <img src="/brand/logo.svg" width={size - 6} height={size - 6} alt="" />
    </span>
  )
}
