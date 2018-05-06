<template lang="pug">
v-navigation-drawer.drawer-with-action-buttons(
  clipped,
  persistent,
  :disable-resize-watcher='true',
  floating,
  absolute,
  :mobile-break-point='0',
  height='',
  :style='style',
  v-model='expanded',
  :right='right',
)
  slot(name='toolbar')
    v-toolbar(
      v-if='toolbar',
      :flat='true'
    )
      v-toolbar-title {{ toolbar.title }}
      v-spacer
      v-btn(
        v-if='toolbar.icon',
        @click='$emit("click-toolbar")',
        icon
      )
        v-icon {{ toolbar.icon }}
  slot(name='actions')
    v-container.action-buttons.pa-0(
      v-if='actions'
      :style='actionButtonsStyle'
    )
      v-card(
        v-for='action in actions',
        :key='action.name',
        height='50px'
      )
        v-btn.action-button.ma-0(
          dark,
          depressed,
          :color='action.color || "primary"',
          @click='$emit("click-action", action.name)'
        )
          v-icon {{ action.icon }}

  slot
  v-footer.footer(
    v-if='footer',
    inset,
    absolute,
    height='unset'
  )
    v-system-bar.status(status)
      slot(name='footer')
</template>

<style lang="stylus" scoped>
.navigation-drawer
  overflow visible

.action-buttons
  position fixed
  top 64px
  width 50px

  .action-button
    min-width unset
    width 100%
    height 100%
    border-radius 0

.footer
  height unset
  min-height unset

  .status
    border-top 1px solid #eee
    font-size 8pt
    background-color white
    width 100%
    padding-right 0
</style>

<script>
export default {
  props: {
    opacity: {
      type: Number,
      default: 1.0,
    },
    margin: {
      type: Number,
      default: 50,
    },
    right: {
      type: Boolean,
      default: false,
    },
    top: {
      type: Number,
      default: 0,
    },
    bottom: {
      type: Number,
      default: 0,
    },
    expanded: {
      type: Boolean,
      default: true,
    },
    expansionButton: {
      type: Boolean,
      default: true,
    },
    footer: {
      type: Boolean,
      default: false,
    },
    actions: {
      type: [Array, Boolean],
      default: false,
    },
    toolbar: {
      type: [Object, Boolean],
      default: false,
    },
  },
  computed: {
    style() {
      return {
        marginTop: `${this.top}px`,
        marginBottom: `${this.bottom}px`,
        opacity: this.opacity,
        top: `${this.margin}px`,
        bottom: `${this.margin}px`,
      };
    },
    actionButtonsStyle() {
      const side = this.right ? 'left' : 'right';
      return {
        [side]: '-50px',
      };
    },
  },
};
</script>