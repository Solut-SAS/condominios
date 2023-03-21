import { logo } from '../../assets'
import './styles.css'

export default function Footer() {
	let mt = `calc(18vh / 2)`
	return (
		<footer className='footer-component hidden sm:block'>
			<div className='flex flex-row items-center ml-10' >

				<div className='footer-logo flex flex-col flex-1' style={{ marginTop: `${mt}` }}>
					<img src={logo} className='w-3/6' />
					<span>Condominios 2023</span>
					<span>Todos los derechos reservados</span>
				</div>

				<div className='flex flex-1 flex-row' style={{ marginTop: `${mt}` }}>
					<a href='' className='mx-4'>Contáctenos</a>
					<a href='' className='mx-4'>A cerca de nosotros</a>
					<a href='' className='mx-4'>Registrarme</a>
				</div>

				<div className='flex flex-1 flex-col' style={{ marginTop: `${mt}` }}>
					<span>Redes sociales</span>
				</div>

			</div>
		</footer>
	)
}
