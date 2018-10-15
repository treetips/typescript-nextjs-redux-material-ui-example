import { Avatar, ListItem, ListItemText } from "@material-ui/core"
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles"
import Link from "next/link"
import React from "react"

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    anchorLink: {
      display: "flex",
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

interface IProps extends WithStyles<typeof styles> {
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
const NextListItemComponent = (props: IProps) => {
  const { classes, className, href, icon, primary, secondary, onClick } = props
  const AvatorIcon = () => icon
  return (
    <ListItem divider={true} className={className} onClick={onClick}>
      <Link href={href}>
        <a className={classes.anchorLink}>
          <Avatar>
            <AvatorIcon />
          </Avatar>
          <ListItemText
            primary={<span className={classes.listItemPrimary}>{primary}</span>}
            secondary={
              <span className={classes.listItemSecondary}>{secondary}</span>
            }
          />
        </a>
      </Link>
    </ListItem>
  )
}

export const NextListItem = withStyles(styles)(NextListItemComponent)
