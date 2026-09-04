---
id: design
title: 6. Varying and designing Regard
sidebar_position: 7
---

The standard configuration is enough to play.

But Regard was designed for another possibility: when a world has a sufficiently strong logic, **the mechanics can stop being generic and start expressing it**.

## Invariants and design choices

The following elements constitute the gesture of Regard:

- begin from a fictional Intention;
- define a Focus and its Zoom;
- make resolution concern what remains genuinely uncertain;
- make important consequences visible when the table contract requires it;
- select what matters and in which direction it matters;
- avoid redundancy at the chosen scale;
- confront the Bets with some form of uncertainty;
- produce a form of result that fiction can use;
- interpret that result from the fiction that was put into play;
- begin again from the transformed world.

Other elements belong to the standard configuration and can be transformed:

- using D6s;
- associating one Bet with one die;
- reading even numbers as Successes;
- forming two pools from the two orientations of the Focus;
- using the same physical representation for every Bet;
- using the standard result scale;
- using escalation;
- using the Fate Gauge.

Variation is not something added from outside the framework.

**It is part of its design.**

## A standard chain of responsibilities

In the standard configuration — and in implementations that compare two orientations — the operations can be separated as follows:

> **Oriented Bets → uncertainty medium → Prism → mechanical signals → aggregation by orientation → result scale → interpretation → transformed fiction**

In the standard configuration:

> **Oriented Bets → D6 → even / odd → Successes → comparison → interpretation through the Bets**

This separation avoids asking a single mechanic to do everything.

The **Prism** transforms uncertainty into mechanical signals.

When several contributions belong to the same orientation, they must be able to be brought together before comparison.

The **result scale** then transforms that comparison into a form of result.

**Interpretation** finally transforms that form of result into fiction from the Bets and the situation.

This chain is a reference architecture, not a universal obligation. A light implementation can use a Prism whose result is directly usable without passing through an opposition between two pools.

## Prisms: how a perspective transforms uncertainty

You have actually been using a Prism from the beginning: the **standard Prism**. Evens and odds are not the hidden reality of Regard. They were simply the default answer we needed in order to learn the resolution loop without introducing its space of variation too early.

Now is the moment to make that choice visible.

The standard Prism has no greater conceptual importance than any other Prism. It is neither the norm of reality nor the engine to which other Prisms merely add exceptions. It is a **design zero point**: a deliberately discreet reading of uncertainty for games that do not want perspective itself to become a particular mechanical issue.

Regard calls a **Prism**:

> **the logic by which a perspective on the world transforms uncertainty into a result the game can use mechanically.**

A Prism is therefore not simply "counting the dice differently" to create an aesthetic variation.

It can modify:

- which results count;
- which patterns become meaningful;
- which dice can be rerolled or transformed;
- which results cancel one another;
- what costs are attached to certain results;
- relationships between several pools;
- the media being used;
- the very form of the result.

The concrete mechanism is the expression of a more fundamental question:

> **What does uncertainty mean from this way of inhabiting the world?**

### The standard Prism

We have already been using it to learn how to play.

The **standard Prism** treats every D6 identically: even, it produces a Success; odd, it does not.

It does not claim to represent the "true" structure of chance.

It simply provides a discreet reading when the game does not want perspective itself to become a particular mechanical issue.

It is a **design zero point**, not a norm that other Prisms should resemble.

It is also the default behavior for adversity without a perspective of its own when neither the world nor the design justifies another treatment.

### Orientation and Prism answer two different questions

Two decisions should not be confused:

1. **Which pool does this Bet enter?**  
   That depends on its orientation relative to the Focus and the Intention.
2. **How does this Bet become mechanically readable?**  
   That depends on the Prism of the perspective carrying it, or on the Prism the game assigns to its actualization.

> **Orientation determines which side a truth weighs on. The Prism determines how that truth passes through uncertainty to become mechanically readable.**

A pool is therefore first and foremost a grouping of Bets oriented in the same direction. It does not need to be homogeneous in terms of Prisms.

### A collective side can bring together several Prisms

> **Sharing an Intention does not mean sharing a perspective.**

If several protagonists contribute to the same Intention from different perspectives, their Bets remain grouped by their common orientation, but are processed according to their respective Prisms.

In that case:

1. Bets remain grouped by orientation;
2. they are processed in coherent subsets according to the Prisms of the perspectives carrying them;
3. comparable outputs are brought together at the level of the orientation.

> **The side determines which contributions are brought together. The Prism determines how each becomes a mechanically comparable contribution.**

This rule avoids artificially imposing the leader's Prism, the majority Prism, or a mechanical mixture with no fictional meaning.

If the fiction establishes that one perspective genuinely dominates collective action, a game can of course represent that. It then becomes a property of the situation, not a general tie-breaking rule.

### Comparable outputs for different perspectives

In Regard as it currently stands, several Prisms can contribute to the same resolution because they can produce a common output format: **Successes**.

However, this current solution should be distinguished from the more general architectural principle.

> **When several Prisms contribute to the same resolution, their outputs must be able to become mechanically comparable at the point of aggregation. Regard currently uses Successes to ensure this comparability. Other interoperability contracts are conceivable, but the framework does not yet formalize them.**

Success should therefore not be prematurely turned into a mandatory universal output for every future Regard implementation.

A game whose Prisms do not produce directly comparable outputs must itself define how several perspectives can cooperate within the same orientation.

### Adversity without a perspective of its own

An adverse orientation can be made up of truths such as:

- *vertical wall*;
- *extreme cold*;
- *unstable terrain*;
- *violent wind*;
- *accumulated fatigue*;
- *distance to cover*.

These truths do create opposition, but they do not necessarily possess a perspective on the world.

Regard recommends reading them in the following order.

#### 1. The adversity has its own logic

Before treating it as neutral, ask whether the world, place, entity, or situation already gives it a mechanically operative logic.

If so, it uses the corresponding Prism.

> **Before treating adversity as neutral, ask whether the world already gives it a logic capable of becoming mechanically operative.**

A sacred mountain, a spirit world, a magical institution, or a cosmological reality may therefore impose its own way of actualizing uncertainty.

#### 2. Mirror Mode

**Mirror Mode** is a canonical Regard mechanism.

It is **not a Prism**. It is an attribution rule: adversity without a perspective of its own is resolved using the Prism of the perspective from which the test is experienced.

> **The Mirror does not give the obstacle a worldview. It makes the protagonist's worldview the way the entire test becomes readable.**

Self-overcoming is a strong example of its use, but it does not universally define the Mirror.

The choice of scenes or situations in which Mirror Mode activates belongs to the **implementation's game design**. Regard provides the mechanism and its meaning; each game decides its activation policy.

With several protagonists:

- **individual Focus**: each protagonist can encounter a Mirror corresponding to their own Prism;
- **collective Focus, shared Prism**: adversity can reflect that common Prism;
- **collective Focus, several Prisms**: there is no longer a single perspective to reflect; the protagonists use their respective Prisms and abstract adversity uses the **standard Prism**.

> **A mirror can reflect a single perspective only if there is a single perspective to reflect.**

A logic belonging to the world or the adversity itself takes precedence over this default rule.

#### 3. Standard Prism

When adversity has no perspective of its own and no design choice justifies Mirror Mode, it uses the **standard Prism**.

In the standard configuration:

- D6;
- even = Success;
- odd = no Success;
- no additional effect.

Here, the standard Prism is a **reading zero point**, not an artificial philosophy assigned to the obstacle.

## When should you create another Prism?

A particular Prism becomes relevant when changing resolution lets the player feel something that description alone would convey less effectively.

A game might want:

- divine favor to transform some failures;
- spirits to make patterns or repetitions meaningful;
- a logical discipline to aggregate results rather than count them;
- a mystical path to cancel an apparently secured Success;
- cyclical thought to make forms emerge rather than independent successes.

The right design question is therefore not:

> *What original mechanic can I invent?*

but:

> **What relationship to the world genuinely deserves to transform the way uncertainty is experienced?**

## Designing a Prism

### 1. Begin with a relationship to the world

Before choosing a mechanic, identify the logic the game wants to make perceptible: accumulation, transcendence, intervention, balance, sacrifice, contamination, reciprocity, prediction, symbiosis, determinism, chance, or something else.

> **What logic of reality should become perceptible when the player resolves uncertainty?**

### 2. Ask what the player should feel or notice

A good Prism does not merely represent an idea.

It influences what the player hopes for, fears, watches, or seeks during resolution.

> **Does playing this Prism push the player to look at the world the way their character does?**

### 3. Translate that relationship into a mechanical operation

Only then choose what can make that logic perceptible:

- even or odd results;
- sums;
- patterns;
- cancellations;
- rerolls;
- die sizes;
- cards, colors, or symbols;
- interactions between pools;
- changes to adversity;
- another uncertainty medium.

The medium comes after the meaning it is meant to produce.

### 4. Decide what form of result to produce

If several Prisms must take part in the same opposition, their outputs must be able to become comparable at the point of aggregation. Regard currently uses Successes for this role.

But a light game can use a standalone result if that better serves the intended experience.

### 5. Check that the mechanic is not merely decorated with lore

A Prism is not "6s explode because that is fun."

Sixes explode if that property expresses something about the reality lived by the character and produces the intended experience at the table.

A useful test is to mentally remove the theme: if the mechanic could be arbitrarily reskinned without losing anything in how it feels, the link between Prism and fiction probably needs to be strengthened.

> **The mechanic is not decorated by the lore: it becomes an operation of the lore.**

### 6. Check its cognitive cost

A Prism can be strange without becoming opaque.

The goal is not to move attention away from complex modifiers only to replace them with another equally intrusive form of technical manipulation.

Ideally, the Prism should make its perspective more perceptible than its procedure is cumbersome.

## The media can resonate too

A Bet does not have to be represented by a D6 identical to every other one.

A game can use:

- dice of different sizes;
- colors with fictional meaning;
- cards;
- tokens;
- coins;
- stones or beads;
- particular objects;
- any other medium whose manipulation serves the intended experience.

Changing the medium is not interesting in itself.

The medium becomes relevant when it extends something the character or world already makes the player feel.

The goal remains the same:

> **reduce the distance between what the player manipulates and what their character experiences.**

### Materializing Successes

Regard does not define a universal procedure for physically materializing Successes.

Set-aside dice, objects, tokens, a digital counter, or a particular table area may be useful depending on the implementation, but those are matters of ergonomics and the chosen medium.

The generic requirement is simpler: as long as a Prism or mechanical interaction still needs the full roll, that roll must remain readable.

A Success does not need to be physically assigned to the Bet that might have produced it. Resolution remains global.

## When the table apparatus enters into resonance

Regard can go beyond the choice of medium: **the actual apparatus of play at the table can sometimes resonate with a property of the fiction.**

This possibility is an advanced opening of the framework, not its new center. It should not become a catalogue of immersive gestures, accessories, or gimmicks.

The question remains the same: does this correspondence make something of the world more perceptible in the act of play?

### Embodied Bets

**Embodied Bets** are a canonical **optional** tool of diegetic design. They are not part of Regard's mandatory standard configuration.

A Regard game may choose to include them. When a game does not decide for itself, a table may also choose whether to use them in its table contract.

> **You do not gain a Bet by performing better. You embody a Bet that already mattered.**

When a table uses this rule:

1. the Bet must first be relevant and non-redundant for the Focus;
2. its embodiment must make the fictional truth it expresses immediately intelligible;
3. **the Bet remains in its pool** and is processed normally by its Prism;
4. its embodiment contributes **1 additional Success** to its orientation;
5. at most **one Embodied Bet per orientation and per resolution**;
6. the GM can embody a Bet from adversity under the same rules.

> **Embodiment adds one Success without changing how the Prism processes the pool.**

This wording matters. Removing the die for an Embodied Bet could artificially change the behavior of a Prism based on a sum, doubles, patterns, explosions, or other internal relationships in the roll.

Resolution remains global: after the fact, the table does not try to establish which specific Bet "succeeded" in the roll.

If both orientations systematically seek embodiment, the additional Successes may tend to cancel one another and the gesture may become automatic.

That is not necessarily a flaw for a game deliberately seeking a ritual, performative, or strongly embodied practice. But Regard does not impose that aesthetic on every implementation.

### Synchronizing table time and fictional time

By default, the time players spend thinking has no consequence.

Accumulated time becomes fictional only if something in the scene **actually waits, evolves, or reacts** while the table deliberates.

> **Deliberation is not punished. The world simply continues when it already had a reason to continue.**

The link can sometimes be imposed or authorized by a **Frame Factor**, but it is not reducible to one: an impatient character, an approaching threat, or a deteriorating situation can emerge directly from the evolution of the scene.

> **When time matters in the world, table time can enter into resonance with it.**

When that evolution is not already obvious, its effect should normally become perceptible in the fiction before it becomes mechanical.

Time may then:

- bring forth a new Bet;
- transform an existing Bet;
- change the Frame;
- or, if the situation changes qualitatively, **transform the Focus**.

The principle is therefore not "thinking too long gives you a penalty."

It is that the world may continue to exist while the table deliberates when the fiction already had a reason not to wait.

## Designing relevance

Prisms are only one of Regard's design points.

A game must also decide which families of fictional truths it wants to make visible and naturally available to the table's attention.

This **grammar of relevance** can be organized around:

- cultures of the world;
- magic;
- social relationships;
- institutions;
- character states;
- genre motifs;
- tropes;
- consequences accumulated in the fiction.

The grammar resembles a **semantic map** more than a closed list.

Two games can use exactly the same Prism and still produce very different experiences because they do not teach the table to look at the same things.

Designing a Regard game therefore does not consist only of writing a random procedure.

**It means deciding what the game teaches players to notice.**

## Trope and relevance

A game can produce a genre not only by giving mechanical structure to certain actions, but also by giving particular importance to the **reasons** that can weigh in the fiction.

Powered by the Apocalypse games provide a useful point of comparison.

Many PbtA games bring forth their genre by giving privileged mechanical structure to particular fictional triggers, consequences, Playbooks, or archetypes.

Regard can act at another level: it can leave the space of actions broadly open while orienting the families of truths the game teaches players to treat as significant.

The trope can then emerge because the game teaches the player **what to look at, what relationships to recognize, and what reasons to let carry weight** in their own actions.

This difference does not mean that Regard is "freer" than PbtA in every circumstance. It points to a different design lever:

> **orient what matters without necessarily prescribing what the character should attempt.**

## Designing character evolution

Because evolution happens through persistent truths, designing progression in a Regard game does not mean drawing a level curve.

The game designer should instead decide:

- which families of truths can appear on the sheet;
- how an experience can create a new one;
- when a truth can be reworded, replaced, or removed;
- who has authority to write those transformations;
- which changes require a resolution and which simply follow from an established fictional event;
- how the game makes important transformations visible.

> **The grammar of relevance defines the possible language of evolution.**  
> **The character's story progressively writes their relevance space in that language.**

Two characters who began with similar sheets can therefore diverge dramatically without either one being "higher level" than the other.

## Three levels not to confuse

### Regard

The framework.

It provides the general grammar of resolution, its concepts, and its points of variation.

### The standard configuration

A fully playable reference implementation.

It lets you use Regard immediately without any prior game design work.

### A game designed with Regard

An implementation that chooses what to keep and what to transform in order to produce an experience specific to its world.

It can define, among other things:

- its grammar of relevance;
- the form of its sheets and fictional memories;
- its Prisms;
- its Frame Factors;
- its media;
- its game economies;
- how its characters evolve;
- its coherence or regulation tools;
- how it interprets consequences;
- its policy for activating Mirror Mode;
- any forms of resonance between the table apparatus and the fiction.

## Situating a Regard game on the design axes

[Resonance proposes four design axes](https://aleascript.github.io/resonance/design-axes) for describing how a game organizes the relationship between players, system, fiction, and world: **cognitive**, **diegetic**, **perspectivist**, and **ontological**.

They do not all have the same status in Regard:

- the resolution gesture is **structurally cognitive**: it first asks participants to judge what matters in the situation rather than search for a value or rule to activate;
- it is also **structurally diegetic**: a Bet is first a fictional truth made relevant, not an abstract modifier attached to the character;
- **perspectivism** is a design possibility, notably through Prisms, but a Regard game can keep the standard Prism without making a particular perspective mechanically operative;
- **ontological** commitment belongs to the game and its world: Regard can express that a perspective actually changes how the world works, but never asserts that by default.

These axes do not replace Regard's own design choices. They help situate what an implementation is trying to do with them.

## A design checklist

When designing a game with Regard, ask in particular:

1. **What does this world or genre teach players to notice?**
2. **Which families of truths should be especially visible?**
3. **How do the sheet, lore, or other media make these truths memorable without turning them into automatic bonuses?**
4. **What makes two Bets distinct or redundant?**
5. **Which Frame Factors genuinely close off possibilities?**
6. **Does the Focus concern a genuine uncertainty, or is it asking the dice to decide something the fiction has already established?**
7. **If a truth is already fixed, what question genuinely remains open around it?**
8. **Does the chosen Zoom correspond to the differences the fiction still wants to distinguish?**
9. **Which truths push in the direction of the Intention and which push against it for this particular Focus?**
10. **Do several perspectives or Prisms contribute to the same orientation? If so, can their outputs become interoperable?**
11. **Does the adverse orientation have a perspective or logic of its own that deserves a particular Prism?**
12. **If not, should Mirror Mode or the standard Prism be used, and why?**
13. **If a Mirror is being considered for a collective resolution, is there genuinely a single perspective to reflect?**
14. **Which consequences must be explicit before a player exposes themselves to them?**
15. **Is the standard configuration enough to express this world?**
16. **If not, what perspective deserves a particular Prism, and what should it make the player feel rather than merely simulate?**
17. **Does the game need opposed pools, and do several Prisms need to share a common output format?**
18. **Would another medium than a D6 make the experience more direct?**
19. **Does a correspondence between the actual table apparatus and the fiction make something of the world genuinely perceptible, or merely add a gimmick?**
20. **Which consequences should return durably to the fiction or the sheet?**
21. **How can the character's truths appear, transform, and disappear?**
22. **What mechanisms maintain coherence when the table interprets relevance freely?**
23. **What safeguards prevent the search for Bets or embodiments from becoming mechanical optimization empty of fictional meaning?**

Every variation should be able to answer one simple question:

> **What does this rule let the player perceive, understand, or feel about the world?**