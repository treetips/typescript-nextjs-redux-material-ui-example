import { List } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import SvgIcon from "@material-ui/core/SvgIcon"
import { useDispatch, useSelector } from "react-redux"
import { Page, SiteInfo } from "../../constants"
import { PageActions } from "../../store/actions"
import { IInitialState } from "../../store/states"
import { NextListItem } from "../molecules"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
    },
    siteNameContainer: {
      fontSize: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      fontWeight: "bold",
      boxShadow: theme.shadows[4],
      zIndex: theme.zIndex.drawer + 1,
    },
    toolbar: theme.mixins.toolbar,
    list: {
      padding: 0,
      border: 0,
    },
    listItem: {
      border: 0,
      boxShadow: theme.shadows[3],
    },
    deactive: {
      transition: "background-color 1.2s", // mouse out
      "&:hover": {
        backgroundColor: theme.palette.primary.light,
        transition: "background-color 0.4s", // mouse over
      },
    },
    active: {
      backgroundColor: theme.palette.primary.light,
    },
  })
)

interface IProps {}

const selectedPageSelector = (state: IInitialState) => state.page.selectedPage

/**
 * Side navigation component
 * @param props IProps
 */
export const Sidenavi = function(props: IProps) {
  const classes = useStyles(props)
  const selectedPage = useSelector(selectedPageSelector)
  const dispatch = useDispatch()

  const handleChangePage = (page: Page) => () =>
    dispatch(PageActions.changePage({ selectedPage: page }))

  return (
    <div className={classes.root}>
      <div className={`${classes.siteNameContainer} ${classes.toolbar}`}>
        {SiteInfo.SITE_NAME}
      </div>

      <List className={classes.list}>
        {Page.values.map(page => {
          const Icon = page.icon
          return (
            <NextListItem
              key={page.id}
              className={
                page.id === selectedPage.id
                  ? `${classes.listItem} ${classes.active}`
                  : `${classes.listItem} ${classes.deactive}`
              }
              href={page.relativeUrl}
              primary={page.pageTitle}
              secondary={page.pageDescription}
              icon={
                <SvgIcon style={{ color: page.iconColor[600] }}>
                  <Icon />
                </SvgIcon>
              }
              onClick={handleChangePage(page)}
            />
          )
        })}
      </List>
    </div>
  )
}
