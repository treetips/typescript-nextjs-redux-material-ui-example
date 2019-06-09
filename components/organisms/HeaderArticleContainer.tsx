import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles"
import { PageHeader } from "../molecules"

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    contentsContainer: {
      padding: theme.spacing(1),
    },
  })

interface IProps extends WithStyles<typeof styles> {
  /**
   * children
   */
  children: React.ReactNode
}

/**
 * Header and article container component
 * @param props IProps
 */
const HeaderArticleContainerComponent = (props: IProps) => {
  const { classes, children } = props
  return (
    <>
      <PageHeader />
      <section className={classes.contentsContainer}>{children}</section>
    </>
  )
}

export const HeaderArticleContainer = withStyles(styles)(
  HeaderArticleContainerComponent
)
