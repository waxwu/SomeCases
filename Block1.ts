import AIClassmate from './aiClassmate'
import Student from './student'
import sprout from '@lls/sprout-js'
import { PrefabPath, Sounds } from '../../foundation/data/AixEnum'
import {
  testA2AData1,
  testPa2aData,
  testPa2a2Data,
  A2PTimeline,
  testPTData1,
  testPTData2,
  test06A2AData1,
  test06A2AData7,
  test06A2AData4,
  test06A2AData8,
  test06A2AData2,
  test06A2AData5,
  test06A2AData3,
  testA2P2Data,
  test06Pa2aData2,
  test06Pa2a2Data1,
  test06P2PData1,
  test06PTData1,
  test06A2AData6,
  test07A2AData1,
  test07A2AData2,
  test07PTData1,
  test07A2AData3,
  test07A2AData4,
  test07A2AData7,
  test06A2AData9,
  test07A2AData9,
  test08A2AData1,
  test08A2AData2,
  test08PTData1,
  test08A2AData3,
  test08A2P2Data1,
  test08A2P2Data2,
  test08P2PData1,
  test08P2PData2,
  test08A2PTimeline1,
  test08A2P2Data3,
  test08A2P2Data4,
  test08Pa2a2Data1,
  test08A2AData4,
  test08A2AData5,
  test08A2AData6,
  test08Pa2aData1,
  test08A2AData7,
  test09A2AData1,
  test09PTData1,
  test09A2AData2,
  test09A2AData3,
  test09A2P2Data1,
  test09A2P2Data2,
  test09P2PData1,
  test09A2PTimeline1,
  test09A2AData4,
  test09A2AData5,
  test09A2PTimeline2,
  test09A2AData6,
  test09A2AData7,
  test09Pa2aData1,
  test09PTData2,
} from '../../foundation/data/AixConfig'
import BaseBlock from './BaseBlock'
import UICurtainView from '../common/scripts/UICurtainView'
import manager, {
  BLOCK_END,
  NEXT_BLOCK,
  SceneState,
  BlockType,
  Mp4Url,
  Theme,
} from './BlockManger'
import TeacherTwoVd from './teacherTwoVd'
import A2P from '../A2P/scripts/A2P'
import Pa2a from '../PA2A/scripts/PA2A'
import P2P from '../P2P/scripts/P2P'
import PA2A2 from '../PA2A2/scripts/PA2A2'
import PT from '../PT/scripts/PT'
import { A2PTimeline2 } from '../../foundation/data/AixConfig'
import A2A from '../A2A/scripts/A2A'
import A2P2 from '../A2P2/scripts/A2P2'
import Reward from '../reward/scripts/Reward'
import RawImg from '../../foundation/common/RawImg'

const { ccclass, property } = cc._decorator

const BlockConfig: { [key in BlockType]: any } = {
  [BlockType.a2a]: {
    prefabPath: PrefabPath.A2A_BLOCK1,
    data: test06A2AData1,
    component: A2A,
  },
  [BlockType.p2a]: {
    prefabPath: PrefabPath.PA2A,
    data: testPa2aData,
    component: Pa2a,
  },
  [BlockType.p2p]: {
    prefabPath: PrefabPath.P2P,
    data: test06P2PData1,
    component: P2P,
  },
  [BlockType.a2p]: {
    prefabPath: A2P.prefabPath,
    data: A2PTimeline,
    component: A2P,
  },
  [BlockType.pa2a]: {
    prefabPath: PrefabPath.PA2A,
    data: test06Pa2aData2,
    component: Pa2a,
  },
  [BlockType.pa2a2]: {
    prefabPath: PrefabPath.PA2A2,
    data: test06Pa2a2Data1,
    component: PA2A2,
  },
  [BlockType.pt]: {
    prefabPath: PrefabPath.PT,
    data: test07PTData1,
    component: PT,
  },
  [BlockType.a2p2]: {
    prefabPath: PrefabPath.A2P2,
    data: testA2P2Data,
    component: A2P2,
  },
}

const test07BoyData = [
  { type: BlockType.a2a, data: test07A2AData1 },
  { type: BlockType.a2a, data: test07A2AData2 },
  { type: BlockType.pt, data: test07PTData1 },
  { type: BlockType.a2a, data: test07A2AData3 },
  { type: BlockType.a2a, data: test07A2AData4 },
  { type: BlockType.a2p2, data: testA2P2Data },
  { type: BlockType.p2p, data: test06P2PData1 },
  { type: BlockType.a2p, data: A2PTimeline },
  { type: BlockType.pa2a2, data: test06Pa2a2Data1 },
  { type: BlockType.a2a, data: test06A2AData5 },
  { type: BlockType.a2a, data: test06A2AData6 },
  { type: BlockType.a2p, data: A2PTimeline2 },
  { type: BlockType.a2a, data: test07A2AData7 },
  { type: BlockType.pa2a, data: test06Pa2aData2 },
  { type: BlockType.a2a, data: test06A2AData8 },
  { type: BlockType.a2a, data: test07A2AData9 },
]

const test07GirlData = [
  { type: BlockType.a2a, data: test06A2AData1 },
  { type: BlockType.a2a, data: test06A2AData2 },
  { type: BlockType.pt, data: test06PTData1 },
  { type: BlockType.a2a, data: test06A2AData3 },
  { type: BlockType.a2a, data: test06A2AData4 },
  { type: BlockType.a2p2, data: testA2P2Data },
  { type: BlockType.p2p, data: test06P2PData1 },
  { type: BlockType.a2p, data: A2PTimeline },
  { type: BlockType.pa2a2, data: test06Pa2a2Data1 },
  { type: BlockType.a2a, data: test06A2AData5 },
  { type: BlockType.a2a, data: test06A2AData6 },
  { type: BlockType.a2p, data: A2PTimeline2 },
  { type: BlockType.a2a, data: test06A2AData7 },
  { type: BlockType.pa2a, data: test06Pa2aData2 },
  { type: BlockType.a2a, data: test06A2AData8 },
  { type: BlockType.a2a, data: test06A2AData9 },
]

const testFarmData = [
  { type: BlockType.a2a, data: test08A2AData1 },
  { type: BlockType.a2a, data: test08A2AData2 },
  { type: BlockType.pt, data: test08PTData1 },
  { type: BlockType.a2a, data: test08A2AData3 },
  { type: BlockType.a2p2, data: test08A2P2Data1 },
  { type: BlockType.a2p2, data: test08A2P2Data2 },
  { type: BlockType.p2p, data: test08P2PData1 },
  { type: BlockType.p2p, data: test08P2PData2 },
  { type: BlockType.a2p, data: test08A2PTimeline1 },
  { type: BlockType.a2p2, data: test08A2P2Data3 },
  { type: BlockType.a2p2, data: test08A2P2Data4 },
  { type: BlockType.pa2a2, data: test08Pa2a2Data1 },
  { type: BlockType.a2a, data: test08A2AData4 },
  { type: BlockType.a2a, data: test08A2AData5 },
  { type: BlockType.a2p, data: test08A2AData6 },
  { type: BlockType.pa2a, data: test08Pa2aData1 },
  { type: BlockType.a2a, data: test08A2AData7 },
]

const testSeaData = [
  { type: BlockType.a2a, data: test09A2AData1 },
  { type: BlockType.pt, data: test09PTData1 },
  { type: BlockType.a2a, data: test09A2AData2 },
  { type: BlockType.a2a, data: test09A2AData3 },
  { type: BlockType.a2p2, data: test09A2P2Data1 },
  { type: BlockType.a2p2, data: test09A2P2Data2 },
  { type: BlockType.p2p, data: test09P2PData1 },
  { type: BlockType.a2p, data: test09A2PTimeline1 },
  { type: BlockType.a2a, data: test09A2AData4 },
  { type: BlockType.a2a, data: test09A2AData5 },
  { type: BlockType.a2p, data: test09A2PTimeline2 },
  { type: BlockType.a2p, data: test09A2AData6 },
  { type: BlockType.a2a, data: test09A2AData7 },
  { type: BlockType.pa2a, data: test09Pa2aData1 },
  { type: BlockType.pt, data: test09PTData2 },
]

const TAG = 'Block1'

const seaThemeImgUrl = {
  grass1: 'common/seaThemeImage/grass1',
  grass2: 'common/seaThemeImage/grass2',
  grass3: 'common/seaThemeImage/grass3',
  grass4: 'common/seaThemeImage/grass4',
  board: 'common/seaThemeImage/imgBoard',
  studentBg: 'common/seaThemeImage/imgStudent',
  teacherBg: 'common/seaThemeImage/teacherBg',
  window: 'common/seaThemeImage/imgWindow',
}
@ccclass
export default class Block1 extends cc.Component {
  @property(TeacherTwoVd)
  public teacherVd: TeacherTwoVd = null

  @property(AIClassmate)
  public aiClassmate: AIClassmate = null

  @property(Student)
  public student: Student = null
  @property(cc.Node)
  public bg: cc.Node = null

  @property(cc.Node)
  public curtainParent: cc.Node = null

  @property(cc.Node)
  public studentGiftReward: cc.Node = null

  @property(cc.Node)
  public txtNode: cc.Node = null

  @property(UICurtainView)
  public curtain: UICurtainView = null

  @property(RawImg)
  public grass1: RawImg = null

  @property(RawImg)
  public grass2: RawImg = null

  @property(RawImg)
  public grass3: RawImg = null

  @property(RawImg)
  public grass4: RawImg = null

  @property(RawImg)
  public board: RawImg = null

  @property(RawImg)
  public window: RawImg = null

  @property(RawImg)
  public teacherBg: RawImg = null

  @property(RawImg)
  public studentBg: RawImg = null

  public currentItem: cc.Node = null

  public nextItem: cc.Node = null

  public async onLoad() {
    this.node.on(BLOCK_END, async () => {
      cc.log(BLOCK_END)
      cc.log(this.currentItem.name, this.nextItem.name)
      if (manager.hideBoard) {
        await this.curtain.hideBoard()
        await this.curtain.hideCurtain()
        this.curtainParent.active = false
      }
      if (manager.currentSceneState === SceneState.big) {
        if (manager.nextSceneState !== SceneState.big) {
          cc.log(' big to small')
          await this.resetTeacherWindow()
        } else {
          cc.log('a2a big to big')
          this.nextItem.active = true
        }
        this.cut()
      } else {
        if (manager.nextSceneState === SceneState.big) {
          cc.log('small to big')
          await this.largerTeacherWindow()
          this.cut()
        } else {
          if (
            (manager.currentType === BlockType.a2a &&
              manager.nextType === BlockType.a2a) ||
            manager.nextType === BlockType.pt
          ) {
            cc.log('a2a  small to small')
            this.nextItem.active = true
            this.cut()
          } else {
            cc.log('other small to small')
            this.nextItem.active = true
            sprout.log.info(TAG, 'currentItem moveIn')
            sprout.animation.playAction(
              this.currentItem,
              cc.moveTo(0.5, cc.v2(-1280, 0)),
            )
            this.nextItem.setPosition(cc.p(1280, 0))
            sprout.audio.playEffectP(Sounds.previewBegins)
            sprout.animation
              .playAction(this.nextItem, cc.moveTo(0.5, cc.v2(0, 0)))
              .then(() => {
                this.currentItem.destroy()
                this.currentItem = this.nextItem
                this.nextItem = null
              })
          }
        }
      }
      manager.cut()
    })
    this.node.on(NEXT_BLOCK, () => {
      cc.log(NEXT_BLOCK)
      this.nextBlock()
    })
    this.curtainParent.active = false
  }

  public cut() {
    this.currentItem.destroy()
    this.currentItem = this.nextItem
    this.nextItem = null
  }

  public async initGroups(num: number) {
    if (manager.resUrl === Mp4Url.Jennifer) {
<<<<<<< HEAD
      if (num < test07GirlData.length - 1) {
        test07GirlData.splice(0, num)
        manager.init(test07GirlData)
        manager.blockTheme = Theme.farm
      }
    } else {
      if (num < test07BoyData.length - 1) {
        test07BoyData.splice(0, num)
        manager.init(test07BoyData)
=======
      if (num < testFarmData.length - 1) {
        testFarmData.splice(0, num)
        manager.init(testFarmData)
        manager.blockTheme = Theme.farm
      }
    } else {
      if (num < testSeaData.length - 1) {
        testSeaData.splice(0, num)
        manager.init(testSeaData)
>>>>>>> 阴影题换肤重新添加
        manager.blockTheme = Theme.seabed
      }
    }
    if (manager.blockTheme === Theme.seabed) {
      this.curtain.bottomTxt.node.color = cc.color(42, 102, 54)
      this.curtain.topTxt.node.color = cc.color(42, 102, 54)
      this.grass1.setPictureResPath(seaThemeImgUrl.grass1)
      this.grass2.setPictureResPath(seaThemeImgUrl.grass2)
      this.grass3.setPictureResPath(seaThemeImgUrl.grass3)
      this.grass4.setPictureResPath(seaThemeImgUrl.grass4)
      this.board.setPictureResPath(seaThemeImgUrl.board)
      this.studentBg.setPictureResPath(seaThemeImgUrl.studentBg)
      this.teacherBg.setPictureResPath(seaThemeImgUrl.teacherBg)
      this.window.setPictureResPath(seaThemeImgUrl.window)
      this.txtNode.setScale(0.8, 0.8)
    }
  }
  public async init<T extends BaseBlock>(
    type: BlockType,
    component: { prototype: T },
  ) {
    const { prefabPath, data } = BlockConfig[type]
    sprout.loader.loadPrefab<T>(prefabPath, component).then(block => {
      block.init(data, this)
      this.student.startDraw()
      this.bg.addChild(block.node)
      this.curtain.hideCurtain()
    })
  }

  public async nextBlock() {
    if (manager.next()) {
      await this.initBlocK(false)
    } else {
      cc.log('all block end')
    }
  }
  public async chooseBlockNum(num: number) {
    this.initGroups(num)
    await this.initBlocK(true, num == 0)
  }

  public async initBlocK(isFirst: boolean, isShow?: boolean) {
    cc.log('initBlocK', isShow)
    const { prefabPath, component } = BlockConfig[manager.blockType]
    const block: BaseBlock = await sprout.loader.loadPrefab(
      prefabPath,
      component,
    )
    this.bg.addChild(block.node)
    if (isFirst) {
      sprout.ccb.gameDidLoad()
      this.currentItem = block.node
      if (isShow) {
        this.curtainParent.active = true
        await this.curtain.showCurtain()
        await this.curtain.showBoard('Level 2', 'Lesson 1')
      }
      this.student.startDraw()
    } else {
      this.nextItem = block.node
      this.nextItem.active = false
    }
    cc.log('manager.blockData', manager.blockData)
    await block.init(manager.blockData, this)
  }

  public showDiamond(num: number) {
    cc.log('showDiamond', num)
    const rewardNode = this.student.coinCount.node
    Reward.showDiamondReward(
      this.teacherVd.rewardNode,
      rewardNode,
      num,
      manager.currentSceneState === SceneState.big,
      () => {
        this.teacherVd.showLightAction()
      },
      () => {
        sprout.animation.playAction(rewardNode, cc.fadeOut(0.1))
      },
      null,
      () => {
        sprout.animation.playAction(rewardNode, cc.fadeIn(0.45))
        sprout.utils.wait(0.25).then(() => {
          this.student.coinCount.add(num)
        })
      },
    )
  }

  public showGiftReward() {
    manager.rewardNum++
    Reward.showGiftReward(
      this.teacherVd.rewardNode,
      this.studentGiftReward,
      manager.currentSceneState === SceneState.big,
    )
  }

  public async exitGame(): Promise<void> {
    sprout.ccb.exitGame()
  }

  public async largerTeacherWindow() {
    this.curtainParent.active = true
    this.teacherVd.shelter.active = true
    this.teacherVd.shelter.opacity = 0
    sprout.animation.playAction(this.teacherVd.shelter, cc.fadeIn(0.5))
    await this.curtain.showCurtain()
    this.nextItem.active = true
    this.teacherVd.changeNode.position = cc.p(150, -486)
    this.teacherVd.rewardNode.position = cc.p(0, -120)
    this.teacherVd.changeNode.scale = 2.7
    this.teacherVd.bigWindowBg.active = true
    await this.curtain.hideCurtain()
    this.curtainParent.active = false
  }

  public async resetTeacherWindow() {
    this.curtainParent.active = true
    await this.curtain.showCurtain()
    this.nextItem.active = true
    this.teacherVd.changeNode.scale = 1
    this.teacherVd.changeNode.position = cc.p(0, 0)
    this.teacherVd.rewardNode.position = cc.p(-150, 365)
    this.teacherVd.bigWindowBg.active = false
    this.teacherVd.shelter.opacity = 255
    sprout.animation
      .playAction(this.teacherVd.shelter, cc.fadeOut(0.5))
      .then(() => {
        this.teacherVd.shelter.active = false
      })
    await this.curtain.hideCurtain()
    this.curtainParent.active = false
  }

  // update (dt) {}
}
