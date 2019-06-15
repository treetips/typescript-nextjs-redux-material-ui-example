import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Link from "next/link"
import React from "react"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    anchorLink: {
      width: "100%",
      textDecoration: "none",
    },
    listItemPrimary: {
      color: theme.palette.primary.contrastText,
      fontWeight: "bold",
      fontSize: "20px",
    },
    listItemSecondary: {
      color: theme.palette.primary.contrastText,
    },
  })
)

interface IProps {
  /**
   * <Link href="/">
   */
  href: string
  /**
   * <ListItemText primary="redux"/>
   */
  primary: React.ReactNode
  /**
   * <ListItemText secondary="description"/>
   */
  secondary?: React.ReactNode
  /**
   * List item icon
   */
  icon: JSX.Element
  /**
   * class
   */
  className?: string
  /**
   * onClick event
   */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

/**
 * Next.js optimized <ListItem>
 * @param props IProps
 */
export const NextListItem = function(props: IProps) {
  const { className, href, icon, primary, secondary, onClick } = props
  const classes = useStyles(props)
  const AvatorIcon = () => icon
  return (
    <Link href={href}>
      <a className={classes.anchorLink} onClick={onClick}>
        <ListItem alignItems="center" divider={true} className={className}>
          <ListItemAvatar>
            <Avatar>
              <AvatorIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={<span className={classes.listItemPrimary}>{primary}</span>}
            secondary={
              <span className={classes.listItemSecondary}>{secondary}</span>
            }
          />
        </ListItem>
      </a>
    </Link>
  )
}
