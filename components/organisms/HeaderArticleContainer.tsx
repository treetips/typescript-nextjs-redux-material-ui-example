import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { PageHeader } from "../molecules"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    contentsContainer: {
      padding: theme.spacing(1),
    },
  })
)

type Props = {
  /**
   * children
   */
  children: React.ReactNode
}

/**
 * Header and article container component
 * @param props Props
 */
export const HeaderArticleContainer = function (props: Props) {
  const { children } = props
  const classes = useStyles(props)
  return (
    <>
      <PageHeader />
      <section className={classes.contentsContainer}>{children}</section>
    </>
  )
}
