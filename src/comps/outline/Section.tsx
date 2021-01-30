import * as React from "react";
import {Activity} from "react-feather";
import style from "@style/outline/section.module.scss";

type SectionProps = {
  name: string,
  icon?: Icon
}

type Icon = {
  iconTag: JSX.Element,
  onClick: () => void
}

const hoge: JSX.Element = (<Activity />)

export const Section = (props: React.PropsWithChildren<SectionProps>) => {

  const icon = props.icon != null ?
      props.icon.iconTag : (<></>);

  return (
    <div className={style.section}>
      <div className={style.sectionHeader}>
        <h2 className={style.title}>{props.name}</h2>
        {icon}
      </div>
    </div>
  )
}