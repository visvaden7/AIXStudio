import project_main from '../assets/pages/project/project_main.svg'
import portfolio_main from '../assets/pages/portfolio/portfolio_main.svg'
import aixLab_main from '../assets/pages/aixLab/aixLab_main.svg'

export const backgroundColor: Record<string, string> = {
  '/project': 'bg-gradient-to-b from-[#FFF5D9] to-transparent to-25%',
  '/portfolio': 'bg-gradient-to-b from-[#EBFFF7] to-transparent to-25%',
  '/aixlab': 'bg-gradient-to-b from-[#FFF0F2] to-transparent via-[#FFF0F2]/20',
  '/': 'bg-transparent'
}
export const backgroundImg: Record<string, string> = {
  '/project': project_main,
  '/portfolio': portfolio_main,
  '/aixlab': aixLab_main,
}
export const backgroundAssetColor: Record<string, string> = {
  '/project': 'border-[#FEF3D3]',
  '/portfolio': 'border-[#DAFFF0]',
  '/aixlab': 'border-[#FFE5E8]',
}