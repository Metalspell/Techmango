import classes from './SocialItems.module.css';

const SocialItems = () => {
  return (
    <section className={classes.mainWrapper}>
      <article className={classes.socialLinks}>
        <h4 className={classes.itemsTitle}>
          Social
        </h4>
        <a className={classes.socialLinkItem} href="@" target="_blank">Twitter</a>
        <a className={classes.socialLinkItem} href="@" target="_blank">Telegram</a>
        <a className={classes.socialLinkItem} href="@" target="_blank">Instagram</a>
      </article>
      <article className={classes.address}>
        <h4 className={classes.itemsTitle}>
          Address
        </h4>
        <p className={classes.socialLinkItem}>
          Unit 33301 Second Floor
        </p>
        <p className={classes.socialLinkItem}>
          6 Market Place, London, Fitzrovia
        </p>
        <p className={classes.socialLinkItem}>
          United Kingdom, W1W 8AF
        </p>
      </article>
      <article className={classes.ourEmail}>
        <h4 className={classes.itemsTitle}>
          Say hello!
        </h4>
        <p className={classes.socialLinkItem}>
          hello@techmango.com
        </p>
      </article>
    </section>
  );
}

export default SocialItems;