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
          zolotovototskaia 6b
        </p>
        <p className={classes.socialLinkItem}>
          01030 kiev
        </p>
        <p className={classes.socialLinkItem}>
          Ukraine
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