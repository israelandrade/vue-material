<template>
  <div class="md-tabs" :class="tabClasses">
    <md-whiteframe md-tag="nav" class="md-tabs-navigation" :md-elevation="mdElevation" :class="navigationClasses" ref="tabNavigation">
      <button
        v-for="header in tabList"
        :key="header.id"
        type="button"
        class="md-tab-header"
        :class="getHeaderClass(header)"
        :disabled="header.disabled"
        @click="setActiveTab(header)"
        ref="tabHeader">
        <md-ink-ripple :md-disabled="header.disabled"></md-ink-ripple>
        <div class="md-tab-header-container">
          <md-icon v-if="header.icon">{{ header.icon }}</md-icon>
          <span v-if="header.label">{{ header.label }}</span>
        </div>
      </button>

      <span class="md-tab-indicator" :class="indicatorClasses" ref="indicator"></span>
    </md-whiteframe>

    <div class="md-tabs-content" ref="tabContent" :style="{ height: contentHeight }">
      <div class="md-tabs-wrapper" :style="{ transform: `translate3D(-${contentWidth}, 0, 0)` }">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./mdTabs.scss"></style>

<script>
  export default {
    props: {
      mdFixed: Boolean,
      mdCentered: Boolean,
      mdRight: Boolean,
      mdDynamicHeight: {
        type: Boolean,
        default: true
      },
      mdElevation: {
        type: [String, Number],
        default: 0
      }
    },
    data: () => ({
      tabList: {},
      activeTab: null,
      activeTabNumber: 0,
      hasIcons: false,
      hasLabel: false,
      transitionControl: null,
      contentHeight: '0px',
      contentWidth: '0px'
    }),
    computed: {
      tabClasses() {
        return {
          'md-dynamic-height': this.mdDynamicHeight,
          'md-transition-off': this.transitionOff
        };
      },
      navigationClasses() {
        return {
          'md-has-icon': this.hasIcons,
          'md-has-label': this.hasLabel,
          'md-fixed': this.mdFixed,
          'md-right': !this.mdCentered && this.mdRight,
          'md-centered': this.mdCentered || this.mdFixed
        };
      },
      indicatorClasses() {
        let toLeft = this.lastIndicatorNumber > this.activeTabNumber;

        this.lastIndicatorNumber = this.activeTabNumber;

        return {
          'md-transition-off': this.transitionOff,
          'md-to-right': !toLeft,
          'md-to-left': toLeft
        };
      }
    },
    methods: {
      getHeaderClass(header) {
        return {
          'md-active': this.activeTab === header.id,
          'md-disabled': header.disabled
        };
      },
      registerTab(tabData) {
        this.tabList[tabData.id] = tabData;
        this.$forceUpdate();
      },
      unregisterTab(tabData) {
        delete this.tabList[tabData.id];
      },
      updateTab(tabData) {
        this.registerTab(tabData);

        if (tabData.active) {
          if (!tabData.disabled) {
            this.setActiveTab(tabData);
          } else {
            let tabsIds = Object.keys(this.tabList);
            let targetIndex = tabsIds.indexOf(tabData.id) + 1;
            let target = tabsIds[targetIndex];

            if (target) {
              this.setActiveTab(this.tabList[target]);
            } else {
              this.setActiveTab(this.tabList[0]);
            }
          }
        }
      },
      observeElementChanges() {
        this.contentObserver = new MutationObserver(this.calculateOnWatch);
        this.navigationObserver = new MutationObserver(this.calculateOnWatch);
        this.contentObserver.observe(this.$refs.tabContent, {
          childList: true,
          attributes: true,
          characterData: true,
          subtree: true,
          attributeOldValue: true,
          characterDataOldValue: true
        });
        this.navigationObserver.observe(this.$refs.tabNavigation.$el, {
          attributes: true
        });
      },
      getTabIndex(id) {
        let idList = Object.keys(this.tabList);

        return idList.indexOf(id);
      },
      calculateIndicatorPos() {
        let tabsWidth = this.$el.offsetWidth;
        let activeTab = this.$refs.tabHeader[this.activeTabNumber];
        let left = activeTab.offsetLeft;
        let right = tabsWidth - left - activeTab.offsetWidth;

        this.$refs.indicator.style.left = left + 'px';
        this.$refs.indicator.style.right = right + 'px';
      },
      calculateTabsWidthAndPosition() {
        const width = this.$el.offsetWidth;

        this.contentWidth = width * this.activeTabNumber + 'px';

        let index = 0;

        for (const tabId in this.tabList) {
          let tab = this.tabList[tabId];

          tab.ref.width = width + 'px';
          tab.ref.left = width * index + 'px';
          index++;
        }
      },
      calculateContentHeight() {
        this.$nextTick(() => {
          let height = this.tabList[this.activeTab].ref.$el.offsetHeight;

          this.contentHeight = height + 'px';
        });
      },
      calculatePosition() {
        window.requestAnimationFrame(() => {
          this.calculateIndicatorPos();
          this.calculateTabsWidthAndPosition();
          this.calculateContentHeight();
        });
      },
      debounceTransition() {
        window.clearTimeout(this.transitionControl);
        this.transitionControl = window.setTimeout(() => {
          this.calculatePosition();
          this.transitionOff = false;
        }, 200);
      },
      calculateOnWatch() {
        this.transitionOff = true;
        this.calculatePosition();
        this.debounceTransition();
      },
      setActiveTab(tabData) {
        this.hasIcons = !!tabData.icon;
        this.hasLabel = !!tabData.label;
        this.activeTab = tabData.id;
        this.activeTabNumber = this.getTabIndex(this.activeTab);
        this.calculatePosition();
        this.$emit('change', this.activeTabNumber);
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.observeElementChanges();
        window.addEventListener('resize', this.calculateOnWatch);

        if (!this.activeTab) {
          let firstTab = Object.keys(this.tabList)[0];

          this.setActiveTab(this.tabList[firstTab]);
        }
      });
    },
    beforeDestroy() {
      this.contentObserver.disconnect();
      window.removeEventListener('resize', this.calculateOnWatch);
    }
  };
</script>
