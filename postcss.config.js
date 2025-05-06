import autoprefixer from "autoprefixer"
import cssnanoPlugin from "cssnano"
import pxtorem from "postcss-pxtorem"

export default ({ env }) => {
  const isProd = env === "production"
  const plugins = []

  if (isProd) {
    plugins.push(
      pxtorem({
        propList: ["*"],
        mediaQuery: true,
      }),
      autoprefixer(),
      cssnanoPlugin()
    )
  }

  return { plugins }
}
