import {FunctionComponent} from "react";
// import {useUserStore} from "../store/useUserStore.ts";

export const MainPage:FunctionComponent = () => {
  //TOOD: API (포트폴리오 리스트, 배너,
  // const user = useUserStore(state => state.user)
  return (
    <div className={'min-h-full'}>
      <div>
        banner
        {/*  swiper 기능 참조 */}
      </div>
      <div>
        portfolio display
      </div>
      <div>
        project display
      </div>
    </div>
  )
}