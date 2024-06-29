import ControlButtons from './control-buttons'
import Logo from './logo'
import NavigationMenuBar from './navmenu'
import { ThemeButton } from '@repo/ui/themes/theme-button'

const Navigation = () => {
  return (
    <>
      <nav className="fixed h-16 inset-x-0 top-0 z-70 w-full border-b-[1px]  dark:border-neutral-900 bg-white/75  dark:bg-black/40 backdrop-blur-lg transition-all ">
        <div className="mx-auto w-full max-w-screen-xl px-2 md:px-12">
          <div className="flex h-16 items-center justify-between ">
            <>
              <div className="items-center space-x-4 sm:flex">
                <Logo />
                <NavigationMenuBar />
              </div>
              <ControlButtons />
              {/* <ThemeButton /> */}
            </>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation
