import { Color } from "@material-ui/core"
import { blue, orange, pink, red } from "@material-ui/core/colors"
import { SvgIconProps } from "@material-ui/core/SvgIcon"
import HomeIcon from "@material-ui/icons/Home"
import InfoIcon from "@material-ui/icons/Info"
import SaveIcon from "@material-ui/icons/Save"
import { IEnum } from "."

/**
 * Page constants
 * @author tree
 */
export class Page implements IEnum<Page> {
  /**
   * For values() array
   */
  private static _values = new Array<Page>()

  public static readonly TOP = new Page(
    1,
    "Top",
    "Top page",
    "Top page | sample",
    "Feat typescript and next.js and redux and material-ui !!",
    "/",
    HomeIcon,
    pink
  )
  public static readonly REDUX = new Page(
    2,
    "Redux",
    "Redux sample",
    "Redux sample | sample",
    "Basic redux examples with typescript-fsa and immer.",
    "/redux",
    SaveIcon,
    blue
  )
  public static readonly ABOUT = new Page(
    3,
    "About",
    "About this site",
    "About | sample",
    "Site about page.",
    "/about",
    InfoIcon,
    orange
  )
  public static readonly ERROR = new Page(
    99,
    "Error",
    "Error",
    "Error | sample",
    "Error.",
    "/error",
    InfoIcon,
    red
  )

  /**
   * constructor
   * @param number page id
   * @param pageTitle page title
   * @param pageDescription page description
   * @param title seo title
   * @param metaDescription seo meta description
   * @param relativeUrl relative url
   * @param icon page icon
   * @param iconColor page icon color
   */
  private constructor(
    public readonly id: number,
    public readonly pageTitle: string,
    public readonly pageDescription: string,
    public readonly title: string,
    public readonly metaDescription: string,
    public readonly relativeUrl: string,
    public readonly icon: React.ComponentType<SvgIconProps>,
    public readonly iconColor: Color
  ) {
    Page._values.push(this)
  }

  /**
   * Instance array
   */
  static get values(): Page[] {
    return this._values
  }

  /**
   * @inheritdoc
   */
  equals = (target: Page): boolean => this.id === target.id

  /**
   * @inheritdoc
   */
  toString = (): string =>
    `${this.id}, ${this.pageTitle}, ${this.pageDescription}`
}
