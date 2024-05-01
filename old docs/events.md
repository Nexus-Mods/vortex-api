---
layout: events
---
# Events

One way an extension integrates with Vortex is by reacting to global events triggered by
the main application.
That way your extension can become part of the regular workflow in the application, e.g.
doing work every time Vortex deploys mod.

## Contributing

The event lists below are generated from this data file:
https://github.com/Nexus-Mods/vortex-api/blob/master/docs/_data/events.yml

If you want to improve the documentation, please fork this repo and make a pull request with your improvements.

## Interacting with events

There are two different ways we trigger events:
- "fire-and-forget" where the emitter emits an event and immediately continues its own work.
- "async" where the emitter waits for all event handlers to complete successfully

{% include note.html content="If it's unclear from context, please consult the event list to figure out which kind an event is
because you need to use the appropriate emit/on function based on the event type." %}

Further we divide the list into "events" and "commands", with "events" being events that
the Vortex core triggers and the extension is expected to catch to react to them and "commands" being events
that extensions are supposed to trigger and Vortex core or another extension reacts to.

In order to have your extension respond to an event you can use the following:
```
context.api.events.on('eventName', callback); // fire-and-forget

context.api.onAsync('eventName', callback); // async
```

To emit an event (or command) yourself use the following:

```
context.api.events.emit('eventName', callback); // fire-and-forget

context.api.emitAndAwait('eventName', callback); // async
```

{% include note.html content="Notice that the asynchronous version is called from the API object directly, rather than from the events property." %}

{% assign pod = "string,number,boolean,any" | split: "," %}

## Event List

{% for event in site.data.events.events %}
{% if event.type == "event" and event.internal != true %}
### {{ event.name }} {% if event.version %} <sup>(Requires Vortex {{ event.version }})</sup> {% endif %}

{% if event.description %}
{{ event.description }}
{% endif %}

<table id='event-list'>
<tr><th>Name</th><td>{{ event.name }}</td></tr>
<tr><th>Parameters</th><td>
<table>
{% for arg in event.arguments %}
<tr>
  <th>
    {{ arg.name }}
    {% if arg.optional %}
    ?
    {% endif %}
  </th>
  <td class="nowrap">
    {% if arg.type contains ' ' or arg.type contains '[' or arg.type contains '(' or pod contains arg.type %}
    {{ arg.type | escape }}
    {% else %}
    <a href="{{ site.url }}/vortex-api/search.html?query={{arg.type}}">{{ arg.type | escape }}</a>
    {% endif %}
  </td>
  <td>{{ arg.description }}</td>
</tr>
{% endfor %}
</table>
</td></tr>
<tr><th>Function</th><td>{% if event.async %}
api.onAsync
{% else %}
api.events.on
{% endif %}</td></tr>
{% if event.trigger %}
<tr><th>Triggered</th><td>{{ event.trigger }}</td></tr>
{% endif %}
</table>
{% endif %}
{% endfor %}

## Command List

Commands as such are conceptually very similar to regular api functions but allow multiple (or no) listeners.
This loose coupling makes them more appropriate for situations where an extension interacts with another
extension where you can't/don't want to rely on the other extension actually being loaded.

{% for event in site.data.events.events %}
{% if event.type == "command" and event.internal != true %}
### {{ event.name }} {% if event.version %} <sup>(Requires Vortex {{ event.version }})</sup> {% endif %}

{% if event.description %}
Description: {{ event.description }}
{% endif %}

<table id='event-list'>
<tr><th>Name</th><td>{{ event.name }}</td></tr>
<tr><th>Parameters</th><td>
<table>
{% for arg in event.arguments %}
<tr>
  <th>
    {{ arg.name }}
    {% if arg.optional %}
    ?
    {% endif %}
  </th>
  <td class="nowrap">
    {% if arg.type contains ' ' or arg.type contains '[' or arg.type contains '(' or pod contains arg.type %}
    {{ arg.type | escape }}
    {% else %}
    <a href="{{ site.url }}/vortex-api/search.html?query={{arg.type}}">{{ arg.type | escape }}</a>
    {% endif %}
  </td>
  <td>{{ arg.description }}</td>
</tr>
{% endfor %}
</table>
</td></tr>
<tr><th>Function</th><td>{% if event.async %}
api.emitAndAwait
{% else %}
api.events.emit
{% endif %}</td></tr>
</table>
{% endif %}
{% endfor %}

## Internal Event List

If you monitor the event emitter in Vortex you may see the following events emitted or handled.
We're not documenting them because they are intended only for internal use.
Please do not use them in extensions, if you actually have a use case for any of these, please contact us.
Since we don't consider these events part of the public API we may be changing them at any time without
notice or mention in the changelog.

{% for event in site.data.events.events %}
{% if event.internal %}
* {{ event.name }}
{% endif %}
{% endfor %}
