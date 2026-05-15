<template>
  <ul class="tw-cat-tree" :class="{ 'tw-cat-tree-sub': isChild }">
    <li
      v-for="node in nodes"
      :key="node.id"
      class="tw-cat-item"
    >
      <div
        class="tw-cat-row"
        :class="{ 'is-active': String(activeId) === String(node.id), 'has-children': hasChildren(node) }"
        @click="handleRowClick(node)"
      >
        <a
          href="javascript:;"
          class="tw-cat-name"
        >
          {{ node.displayName || node.name }}
        </a>
        <span
          v-if="hasChildren(node)"
          class="tw-cat-toggle"
          @click.stop="$emit('toggle', node.id)"
        >
          <i :class="expandedMap[node.id] ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'"></i>
        </span>
      </div>

      <template v-if="hasChildren(node) && expandedMap[node.id]">
        <CategoryTree
          :nodes="node.children"
          :active-id="activeId"
          :expanded-map="expandedMap"
          :is-child="true"
          @select="$emit('select', $event)"
          @toggle="$emit('toggle', $event)"
        />
      </template>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CategoryTree',
  props: {
    nodes: {
      type: Array,
      default: () => []
    },
    activeId: {
      type: [String, Number],
      default: null
    },
    expandedMap: {
      type: Object,
      default: () => ({})
    },
    isChild: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hasChildren(node) {
      return Array.isArray(node.children) && node.children.length > 0
    },
    handleRowClick(node) {
      this.$emit('select', node.id)
      if (this.hasChildren(node)) {
        this.$emit('toggle', node.id)
      }
    }
  }
}
</script>

<style scoped>
.tw-cat-tree {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tw-cat-tree-sub {
  padding-left: 16px;
  border-left: 1px dashed #e5e5e5;
  margin-left: 10px;
}

.tw-cat-item {
  list-style: none;
}

.tw-cat-row {
  display: flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

.tw-cat-row:hover {
  background: #f4fafb;
}

.tw-cat-row:hover .tw-cat-name {
  color: #1A8FA4;
}

.tw-cat-row.is-active {
  background: #e8f5f7;
}

.tw-cat-row.is-active .tw-cat-name {
  color: #1A8FA4;
  font-weight: 600;
}

.tw-cat-name {
  flex: 1;
  color: #555;
  font-size: 14px;
  text-decoration: none;
  user-select: none;
}

.tw-cat-toggle {
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #888;
  font-size: 16px;
  flex-shrink: 0;
  border-radius: 4px;
}

.tw-cat-toggle:hover {
  color: #1A8FA4;
  background: #fff;
}

.tw-cat-tree-sub .tw-cat-name {
  font-size: 13px;
  color: #666;
}
</style>
